import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./components/Pages/Home"
import Signup from "./components/Pages/Signup"
import Login from "./components/Pages/Login"

const AppRoutes = () => (
  <Switch>
    <Route exact component={(props) => <Home {...props} />} path="/home" />
    <Route component={(props) => <Signup {...props} />} path="/signup" />
    <Route component={(props) => <Login {...props} />} path="/login" />
    {/* <Route
      exact
      component={(props) => <Borrower {...props} />}
      path="/borrower"
    />
    <Route exact component={(props) => <Owner {...props} />} path="/owner" /> */}
  </Switch>
)

export default AppRoutes
