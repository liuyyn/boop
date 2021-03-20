import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import theme from "../../color"
import { AuthBox, Title, StyledInput, Text, InputBox } from "./__styled__/Auth"
import { Button } from "@material-ui/core"
import { useAuth } from "../../context/AuthContent"
import { Form } from "reactstrap"
import Alert from "@material-ui/lab/Alert"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(email, password)
      history.push("/home")
    } catch {
      setError("Failed to sign in")
    }

    setLoading(false)
  }

  return (
    <AuthBox>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Text>What can be better for your health than pet therapy</Text>
        <InputBox>
          {error && (
            <Alert variant="outlined" severity="error">
              {error}
            </Alert>
          )}
          <StyledInput
            InputProps={{ borderColor: `${theme.color.blue}` }}
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            placeholder="someone@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <StyledInput
            InputProps={{ borderColor: `${theme.color.blue}` }}
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputBox>

        <InputBox>
          <Button disabled={loading} onClick={handleSubmit} fullWidth>
            Login
          </Button>
        </InputBox>
      </Form>

      <Text>
        Need an account? <Link to="/signup">Sign Up</Link>
      </Text>
    </AuthBox>
  )
}

export default Login
