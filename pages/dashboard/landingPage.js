import { useState, useEffect } from "react";
import Dashboard from "../../components/Dashboard";
import { notLoggedin } from "../../utils/auth";
import { useAuth } from '../../lib/db'

const landingPage = ({user}) => {

  const auth = useAuth()

  const [refreshToken, setRefreshToken] = useState('')

  useEffect(() => {
    if(auth.user) {
      setRefreshToken(auth.user.refreshToken)
    } else {
      setRefreshToken('')
    }
  }, []);

  // if (token && token === refreshToken) {
    return (
      <Dashboard user={user}>
        Landing Page
      </Dashboard>
    )
  // }
  // return <Login />

}

landingPage.getInitialProps = (ctx) => {
  return notLoggedin(ctx)
}

export default landingPage