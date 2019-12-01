// import { useState, useEffect } from "react";
// import { auth } from "../lib/db"
// import Router from "next/router";
// import Layout from '../components/Layout'

// export const privateRoute = (WrappedComponent) => {

//   const Wrapper = props => {

//     const [values, setValues] = useState({
//       loggedIn: false,
//     })

//     useEffect(() => {

//       const unsubscribe = auth.onAuthStateChanged(user => {
//         if (user) {
//           setValues({ loggedIn: true })
//         } else {
//           setValues({ loggedIn: false })
//           Router.push('/')
//         }
//       })

//       return () => unsubscribe()
//     }, [values.loggedIn]);

//     return (
//       <Layout>
//         <WrappedComponent {...props} />
//       </Layout>
//     )
//   }

//   return Wrapper
// }

// export default privateRoute