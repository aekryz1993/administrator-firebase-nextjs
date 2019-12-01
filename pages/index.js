// import { useState, useEffect } from "react";
// import Router from "next/router";
// import nextCookie from 'next-cookies'
import { useAuth } from '../lib/db'
import { Loggedin } from "../utils/auth";
import Login from "../components/Login";
import Profile from "../components/Profile";
// import { Router } from "next/router";

// const index = ({token}) => {

//   const auth = useAuth();

//   const [Loggedin, setLoggedin] = useState(false)

//   useEffect(() => {
//     if (auth.user) {
//       setLoggedin(true)
//       Router.replace('/', '/dashboard/profile')
//     } else {
//       setLoggedin(false)
//       // Router.replace('/', '/login')
//     }
//   }, [Loggedin]);

//   if (auth.user || token) {
//     return (
//       <Profile />
//     )
//   } else if (!auth.user || !token) {
//     return (
//       <Login />
//     )
//   }
// }

const login = ({token}) => {

  const auth = useAuth()

  // console.log(auth.user.refreshToken)

  if(token && token === auth.user.refreshToken) {
    return (
      <Profile/>
    )
  }
  return <Login/>
}

login.getInitialProps = async (ctx) => {
  return Loggedin(ctx)
}

export default login