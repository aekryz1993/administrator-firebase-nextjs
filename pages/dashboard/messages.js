import { useState, useEffect } from "react";
import Dashboard from "../../components/Dashboard";
import { notLoggedin } from "../../utils/auth";
import { useAuth } from '../../lib/db'
import Login from "../../components/Login";

const messages = ({token}) => {

  const auth = useAuth()

  const [refreshToken, setRefreshToken] = useState('')

  useEffect(() => {
    if(auth.user) {
      setRefreshToken(auth.user.refreshToken)
    } else {
      setRefreshToken('')
    }
  }, []);

  // if(token && token === refreshToken) {
    return (
      <Dashboard>
        messages
      </Dashboard>
    )
  // }
  // return <Login />
}

messages.getInitialProps = (ctx) => {
  return notLoggedin(ctx)
}

export default messages