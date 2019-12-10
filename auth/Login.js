import { useState, useEffect } from "react";
import { Field } from "redux-form";

const Login = ({ message, redirect, onSubmit, handleSubmit, loginRequestEnded }) => {
// const Login = ({ message, redirect, loginRequest, loginRequestEnded }) => {

  // const [values, setValues] = useState({
  //   email: '',
  //   password: ''
  // }) 

  useEffect(() => {
    if(message) console.log(message)
    return () => {
      loginRequestEnded();
    };
  }, []);

  // const onSubmit = (event) => {

  //   event.preventDefault()

  //   const { email, password } = values

  //   loginRequest(email, password)
    
  // }

  // const onChange = (event) => {
  //   setValues({ ...values, [event.target.name]: event.target.value })
  // }

  // const isInvalid =
  //   values.password === '' ||
  //   values.email === ''

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="email" component="input" placeholder="email" type="text" required />
        <Field name="password" component="input" placeholder="Password" type="password" required/>
        {/* <input
          name="email"
          value={values.email}
          onChange={onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={values.password}
          onChange={onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">Login</button> */}
        <input type="submit" value="Login" />
      </form>
    </>
  )
}

export default Login