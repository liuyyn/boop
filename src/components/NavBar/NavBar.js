import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Title, StyledButton, StyledLink } from "./__styled__/NavBar"
import { useAuth } from "../../context/AuthContent"
import { useHistory } from "react-router"

const NavBar = () => {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  const handleLogout = async () => {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to logout")
    }
  }

  return (
    <AppBar style={{ background: "#FF744E", maxWidth: "100%" }}>
      <Toolbar style={{ maxWidth: "100%" }}>
        <Title>BOOP</Title>

        <StyledLink role="link" to="/">
          <StyledButton>Home</StyledButton>
        </StyledLink>

        <StyledLink role="link" to="/">
          <StyledButton>About</StyledButton>
        </StyledLink>

        <StyledLink role="link" to="/">
          <StyledButton>FAQ</StyledButton>
        </StyledLink>

        {currentUser ? (
          // <StyledLink role="link" to="/login">
          <StyledButton onClick={handleLogout}>Logout</StyledButton>
        ) : (
          // </StyledLink>
          <>
            <StyledLink role="link" to="/signup">
              <StyledButton>Register</StyledButton>
            </StyledLink>

            <StyledLink role="link" to="/login">
              <StyledButton>Login</StyledButton>
            </StyledLink>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
