import { useState, useEffect } from "react";
// import cookie from 'react-cookies'
import Router from "next/router";
import { auth, readUserData, signOut, firestore } from '../lib/db'
// import { verifyToken } from '../lib/customClaims'
import Dashboard from "../components/Dashboard";

const dashboard = () => {

  const [values, setValues] = useState({
    title: '',
    content: '',
    isLoggedin: true,
    user: ''
  })

  useEffect(() => {
    if (!auth.currentUser) {
      setValues({ ...values, isLoggedin: false, user: '' })
      Router.push('/admin')
    } else {
      setValues({ ...values, isLoggedin: true, user: auth.currentUser.email })
    }
    return () => {
      setValues({ ...values, isLoggedin: false, user: '' })
    };
  }, [values.isLoggedin]);

  const onSubmit = (event) => {
    // readUserData(auth.currentUser.uid)

    if (auth.currentUser.admin) {
      event.preventDefault()
      firestore.collection('blogs').add({
        title: event.target.title.value,
        content: event.target.content.value,
      }).then(() => {
        console.log('blog has been added');
        setValues({ ...values, title: '', content: '' })
      }).catch(err => {
        console.log(err.message);
      });
    } else {
      console.log('there is not user signed in')
    }
    // const token =  cookie.load('idToken')
    // verifyToken(token).then()


  }

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleClick = () => {
    // readUserData(auth.currentUser.uid)
    if (auth.currentUser) {
      console.log(auth.currentUser.uid)
      signOut().then(() => {
        console.log('signout')
        setValues({ ...values, isLoggedin: false })
        Router.push('/admin')
      })
    } else {
      console.log('there is not user signed in')
    }
  }

  const isInvalid =
    values.title === '' ||
    values.content === ''

  return (
    <Dashboard>
      <div>
        <div>Hello, {values.user}</div>
      </div>
      <form onSubmit={onSubmit}>
        <input
          name="title"
          value={values.title}
          onChange={onChange}
          type="text"
          placeholder="Entre the title"
          style={{ display: "block" }}
        />
        <input
          name="content"
          value={values.content}
          onChange={onChange}
          type="text"
          placeholder="Write your blog"
          style={{ display: "block", height: "50vh" }}
        />
        <button disabled={isInvalid} type="submit">Submit</button>
        {/* {values.error && <p>{values.error.message}</p>} */}
      </form>
      <button onClick={handleClick}>Logout</button>
    </Dashboard>
  )
}

export default dashboard