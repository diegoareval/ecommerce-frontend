import React from 'react'
import Menu from './Menu'
import  "./styles/layout.css"

const Layout = ({title='', description= '', children}) => {
  return (
   <>
        <Menu/>
   <div class="jumbotron jumbotron-billboard">
  <div class="img"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
              <h2>{title}</h2>
                <p>
                    {description}
                </p>
                <a href="#" class="btn btn-success btn-lg">Sign Up</a>
            </div>
        </div>
    </div>
</div>
<div>
  {children}
</div>
   </>
  )
}

export default Layout
