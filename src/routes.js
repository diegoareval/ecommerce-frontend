import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import SignUp from "./user/SignUp"
import SignIn from "./user/SignIn"
import Home from "./main/Home"
import {Provider} from "react-redux"
import store from "./redux/store/store"

const Routes = () =>{
  return (
    <BrowserRouter>
      <Switch>
      <Provider store={store}>
      <Route path="/" exact component={Home} />
        <Route path="/login" exact component={SignIn} />
        <Route path="/register" exact component={SignUp} />
        </Provider>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes