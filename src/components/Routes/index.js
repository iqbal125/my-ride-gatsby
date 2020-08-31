import React from "react"
import { Router } from "@reach/router"
import { navigate } from "gatsby"
import City from "../CityContainer"

const auth = {
  isAuthenticated: false,
}

const Routes = () => {
  const Login = props => {
    if (auth.isAuthenticated) {
      auth.isAuthenticated = false
      navigate("/")
    }
    console.log("Setting authenticated!")
    auth.isAuthenticated = true
    navigate("/authorized")
  }

  const PrivateRoute = ({ component: Component, location, ...rest }) => {
    if (true) {
      navigate("/app/login")
      return null
    } else {
      return <Component {...rest} />
    }
  }
  //Client Side only routes break styling
  return (
    <Router>
      <City path="/app/city" />
    </Router>
  )
}

export default Routes
