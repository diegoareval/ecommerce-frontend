import React from 'react'
import "./styles/Login.css"

 const SignIn = () => {
  return (
    <div className="cont-main">
 <div className="container">
        <h1>JENNY DESIGN</h1>
        <div className="login-body">
            <div className="top-login">
                <div className="title">
                    Login Form
                </div>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
                <div className="line-11"></div>
                <div className="line-22"></div>
                <div className="line-33"></div>
                <div className="line-111"></div>
                <div className="line-222"></div>
                <div className="line-333"></div>
            </div>
            <div className="character-circel">
                <div className="character-body">
                    <div className="head"></div>
                    <div className="hair1"></div>
                    <div className="hair2"></div>
                </div>
            </div>
            <div className="character-bacground"></div>
            <div className="character-bacground2"></div>
            <div className="character-bacground3"></div>
            <div className="character-circle1"></div>
            <div className="character-circle2"></div>
            
            <div className="login-box">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="morab31"></div>
                <div className="morab32"></div>
                <div className="morab33"></div>
                <div className="morab34"></div>
                <input type="text" placeholder="Username ..."/>
                <input type="password" placeholder="Password ..."/>
                <button className="button">Sign in</button>

                <div className="last-info">
                    <div className="one">
                        Remember Me
                        <input type="checkbox" id="thing"/>
                        <label for="thing"></label>
                    </div>
                    <div className="two">
                        <a href="#">Create Account</a>
                    </div>
                    <div className="three">
                        <a href="#">Forget Password ?</a>
                    </div>
                </div>
            </div>
            <div className="down-login">
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignIn