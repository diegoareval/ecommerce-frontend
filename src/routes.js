import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import SignUp from "./user/SignUp"
import SignIn from "./user/SignIn"
import Home from "./main/Home"
import Menu from "./main/Menu"


const Routes = () =>{
  return (
    <BrowserRouter>
     <Menu/>
      <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/login" exact component={SignIn} />
        <Route path="/register" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes