import React from 'react'
import { useForm } from "react-hook-form";
import AuthLayout from './AuthLayout';
import "./styles/Login.css"
import validations from "../helpers/validations"

 const SignIn = () => {
   const { register, handleSubmit, errors } = useForm();

   // aplicando prototype  pattern
   const validation = Object.create(validations);
   
   const onSubmit = data => {
     console.log(data);
   }
  return (
    <>
  <AuthLayout>
   <form onSubmit={handleSubmit(onSubmit)} title="Login Page">
          <div className="form-group">
                <label>Email</label>
                <input name="email" type="text" className="form-control" placeholder="Email" ref={register(validation.email)} />
            </div>
              <div className="form-group">
                   <label>Password</label>
                  <input name="password" type="password" className="form-control" placeholder="Password" 
                  ref={register(validation.password)}/>
              </div>
                  <div className="text-center">
                  <button type="submit" className="btn btn-black">Login</button>
                  </div>
      </form>
  </AuthLayout>
      </>
  )
}

export default SignIn
