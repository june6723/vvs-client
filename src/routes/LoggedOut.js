import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import LogIn from '../components/Auth/LogIn'
import SignUp from '../components/Auth/SignUp'
import LoggedOutHome from '../components/home/LoggedOutHome'
import Navbar from '../components/Navbar/Navbar'

const LoggedOut = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={LoggedOutHome} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  )
}

export default LoggedOut
