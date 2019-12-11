import { useState, useEffect } from "react";
import Router from "next/router";
import { Field } from "redux-form";

const Login = ({ message, redirect, onSubmit, handleSubmit, loginRequestEnded }) => {

  useEffect(() => {
    return () => {
      loginRequestEnded();
    };
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="email" component="input" placeholder="email" type="text" required />
        <Field name="password" component="input" placeholder="Password" type="password" required/>
        <input type="submit" value="Login" />
      </form>
    </>
  )
}

export default Login