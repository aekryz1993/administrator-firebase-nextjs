import { useState, useEffect } from "react";
import { useAuth } from '../../lib/db'
import Dashboard from "../../components/Dashboard";
import { notLoggedin } from "../../utils/auth";
import Login from "../../components/Login";

const blogs = ({token}) => {

  const auth = useAuth()

  const [refreshToken, setRefreshToken] = useState('')

  useEffect(() => {
    if(auth.user) {
      setRefreshToken(auth.user.refreshToken)
    } else {
      setRefreshToken('')
    }
  }, []);

  const [values, setValues] = useState({
    title: '',
    content: '',
  })

  const onSubmit = (event) => {

    event.preventDefault()

    if (auth.user) {
      auth.firestore.collection('blogs').add({
        title: event.target.title.value,
        content: event.target.content.value,
      }).then(() => {
        console.log('blog has been added');
        setValues({ ...values, title: '', content: '' })
      }).catch(err => {
        console.log(err.message);
      });

    } else {
      console.log(auth.currentUser.admin)
      // console.log('there is not user signed in')
    }
  }

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const isInvalid =
    values.title === '' ||
    values.content === ''

  // if (token && token === refreshToken) {
    return (
      <Dashboard>
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
        </form>
      </Dashboard>
    )
  // }
  // return <Login />

}

blogs.getInitialProps = (ctx) => {
  return notLoggedin(ctx)
}

export default blogs