import React from 'react'
import "./styles/menu.css"
import {Link, withRouter, useHistory} from "react-router-dom"

 const isActive = (history, path) =>{
   console.log(history)
    if(history.location === path){
      return true
    } else{
       return false
    }
  }

const Menu = ({props}) => {
 let history = useHistory();
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
     <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="mb-2 mr-auto navbar-nav mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${isActive(history,"/login")?"active":null}`} to="/login">Sign In</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${isActive(history,"/register")?"active":null}`}  to="/register">Register</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="mr-2 form-control" type="search" placeholder="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Menu
