import React from 'react'
import "./styles/Login.css"


 const Layout = ({children, title}) => {
  return (
    <>
   <div class="sidenav">
         <div class="login-main-text">
            <h2>MERN Ecommerce<br/>{title}</h2>
            <p>Welcome to the ecommerce app</p>
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               {children}
            </div>
         </div>
      </div>
      </>
  )
}

export default Layout


