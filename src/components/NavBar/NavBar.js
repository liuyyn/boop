import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Title, StyledButton, StyledLink } from "./__styled__/NavBar"

const NavBar = () => (
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

      <StyledLink role="link" to="/">
        <StyledButton>Register</StyledButton>
      </StyledLink>

      <StyledLink role="link" to="/">
        <StyledButton>Login</StyledButton>
      </StyledLink>
    </Toolbar>
  </AppBar>
)

export default NavBar
