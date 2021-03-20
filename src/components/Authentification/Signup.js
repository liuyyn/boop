import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import theme from "../../color"
import { AuthBox, Title, StyledInput, Text, InputBox } from "./__styled__/Auth"
import Button from "@material-ui/core/Button"
import { useAuth } from "../../context/AuthContent"
import { Form } from "reactstrap"
import Alert from "@material-ui/lab/Alert"

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory() // react-router-dom hook to go to path when clicking on signup button

  const { signup } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      return setError("Password do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(email, password)
      history.push("/home")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <AuthBox>
      <Form onSubmit={handleSubmit}>
        <Title>Sign up</Title>
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

          <StyledInput
            InputProps={{ borderColor: `${theme.color.blue}` }}
            fullWidth
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </InputBox>

        <InputBox>
          <Button disabled={loading} onClick={handleSubmit} fullWidth>
            Sign Up
          </Button>
        </InputBox>
      </Form>
      <Text>
        Already have an account? <Link to="/login">Login</Link>
      </Text>
    </AuthBox>
  )
}

export default Signup
