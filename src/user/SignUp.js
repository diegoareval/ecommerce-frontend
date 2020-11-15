import React from 'react'
import { useForm } from "react-hook-form";
import AuthLayout from './AuthLayout';
import "./styles/Login.css"
import validations from "../helpers/validations"
import {API} from "../config/config"
import Axios from "axios"
import Header from "../helpers/requestHelpers"

 const SignUp = () => {
   const { register, handleSubmit, errors } = useForm();

   // aplicando builder pattern
   const header = new Header().setHeader().build();
 
   // aplicando prototype  pattern
   const validation = Object.create(validations);

   const signUp = async (user) =>{

return await Axios.post(
		`${API}/signup`,
		user,
		{
			headers: header,
		}
	)
		.then((response) => {
		console.log(response)
		})
		.catch(error => console.log(error));

  }
console.log(errors)   
   const onSubmit = data => {
     signUp(data)
   }

  // console.log(errors)
  return (
   <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)} title="Register Page">
        <div className="form-group">
                <label>Name</label>
                <input name="name" type="text" className="form-control" placeholder="Email" ref={register(validation.name)} />
            </div>
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
                  <button type="submit" className="btn btn-black">Sign Up</button>
                  </div>
      </form>
   </AuthLayout>
  )
}

export default SignUp