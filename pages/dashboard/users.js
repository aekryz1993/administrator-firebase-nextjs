import Dashboard from "../../components/Dashboard";
import { notLoggedin } from "../../utils/auth";

const users = ({ user }) => {
  return (
    <Dashboard user={user}>
      users
    </Dashboard>
  )
}

users.getInitialProps = (ctx) => {
  return notLoggedin(ctx)
}

export default users