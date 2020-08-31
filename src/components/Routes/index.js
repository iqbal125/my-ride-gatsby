import React from "react"
import { Router } from "@reach/router"
import { navigate } from "gatsby"

const Routes = () => {
  const PrivateRoute = ({ component: Component, location, ...rest }) => {
    if (!isTokenValid()) {
      navigate("/app/login")
      return null
    } else {
      return <Component {...rest} />
    }
  }

  return <Router></Router>
}

export default Routes
