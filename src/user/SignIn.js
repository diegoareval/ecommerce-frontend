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

   console.log(errors)
  return (
   <AuthLayout>
   <form onSubmit={handleSubmit(onSubmit)}>
    <input name="email" type="text" placeholder="Email ..." ref={register(validation.email)} />
      <input name="password" type="password" placeholder="Password ..." ref={register(validation.password)} />
      <button className="button" type="submit">Sign in</button>
      </form>
   </AuthLayout>
  )
}

export default SignIn