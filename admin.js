import { useState, useEffect } from "react";
import cookie from 'react-cookies'
import { signIn, signOut, auth, writeUserData, readUserData, functions } from '../lib/db'
import Router from "next/router";

const admin = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
    user: null,
    isLoggedin: false
  })

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // console.log(user)
        user.getIdTokenResult().then(idTokenResult => {
          user.admin = idTokenResult.claims.admin;
          Router.push('/dashboard')
        })
      }
    })
  });

  const onSubmit = (event) => {
    const { email, password } = values

    const loginAsAdmin = functions.httpsCallable('loginAsAdmin');
    loginAsAdmin({ email: email }).then(snapshop => {
      console.log(snapshop.data.admin)
      if (snapshop.data.admin) {
        signIn(email, password)
          .then((user) => {
            // user.user.getIdToken().then(idToken => cookie.save('idToken', idToken))
            // setValues({ email: '', password: '', user: auth.currentUser, isLoggedin: true })
            // writeUserData(auth.currentUser.uid, 'aekryz')
            // Router.push('/dashboard')
            console.log('user')

          })
          .catch((e) => console.log(e.message))
      } else {
        console.log('you are not admin')
      }
    });

    event.preventDefault()
  }

  const handleClick = (email) => {
    // readUserData(auth.currentUser.uid)
    // const addAdminRole = functions.httpsCallable('addAdminRole');
    // addAdminRole({ email: email }).then(result => {
    //   console.log(result);
    // });

    // const loginAsAdmin = functions.httpsCallable('loginAsAdmin');
    // loginAsAdmin({ email: email }).then(result => {
    //   console.log(result);
    // });

    if (auth.currentUser) {
      console.log(auth.currentUser.uid)
      signOut().then(() => console.log('signout'))
    } else {
      console.log('there is not user signed in')
    }
  }

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const isInvalid =
    values.password === '' ||
    values.email === ''

  return (
    <div>
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
        {/* {values.error && <p>{values.error.message}</p>} */}
      </form>
      <div>{values.user && values.user.email}</div>
      <button onClick={() => handleClick('aekrizi@gmail.com')}>Get data</button>
    </div>
  )
}

export default admin