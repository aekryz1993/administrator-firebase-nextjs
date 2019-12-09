import { useState, useEffect } from "react";
// import {useRouter} from "next/router";
import Profile from "../../components/Profile";
import { notLoggedin } from "../../utils/auth";
import { useAuth } from '../../lib/db'
// import Login from "../../components/Login";

const profile = ({user}) => {

  const auth = useAuth()
  // const router = useRouter()

  const [refreshToken, setRefreshToken] = useState('')

  useEffect(() => {
    if(auth.user) {
      setRefreshToken(auth.user.refreshToken)
      // console.log(router)
    } else {
      setRefreshToken('')
    }
  }, []);

  // if (token && token === refreshToken) {
    return (
      <Profile user={user}/>
    )
  // }
  // return <></>
}

profile.getInitialProps = (ctx) => {
  return notLoggedin(ctx)
}

export default profile