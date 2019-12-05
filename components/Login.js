import { useState, useEffect } from "react";
import { useAuth } from '../lib/db'
import Router from "next/router";

const Login = () => {

  const auth = useAuth();

  // const router = useRouter()

  const [values, setValues] = useState({
    email: '',
    password: ''
  }) 

  const onSubmit = (event) => {

    event.preventDefault()

    const { email, password } = values
    
    auth.signin(email, password)
      .then(response => console.log(response))
      .then(() => Router.push('/', '/dashboard/profile', { shallow: false }))
  }

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const isInvalid =
    values.password === '' ||
    values.email === ''

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
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
        <button disabled={isInvalid} type="submit">Login</button>
      </form>
    </>
  )
}

export default Login