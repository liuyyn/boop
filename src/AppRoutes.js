import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./components/Pages/Home"

const AppRoutes = () => (
  <Switch>
    <Route exact component={(props) => <Home {...props} />} path="/" />
    {/* <Route
      exact
      component={(props) => <Borrower {...props} />}
      path="/borrower"
    />
    <Route exact component={(props) => <Owner {...props} />} path="/owner" /> */}
  </Switch>
)

export default AppRoutes
