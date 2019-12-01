import { useState, useEffect } from "react";
import { useAuth } from '../lib/db'
import Router from "next/router";

const Login = ({token}) => {

  const auth = useAuth();

  // const router = useRouter()

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  // useEffect(() => {
  //   const handleRouteChange = url => {
  //     // router.prefetch(url)
  //   }
  
  //   Router.events.on('routeChangeStart', handleRouteChange)
  //   return () => {
  //     Router.events.off('routeChangeStart', handleRouteChange)
  //   }
  // }, [])  

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