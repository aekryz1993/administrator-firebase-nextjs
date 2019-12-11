import { Loggedin } from "../utils/auth";
import LoginContainer from "../auth/LoginContainer";

const login = ({user}) => {

  return (
    <>
      <LoginContainer user={user}/>
    </>
  )
}

login.getInitialProps = async (ctx) => {
  return Loggedin(ctx)
}

export default login