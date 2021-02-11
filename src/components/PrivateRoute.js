import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"

//private route is to check if user is already logged in to redirect them back to login
export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}
