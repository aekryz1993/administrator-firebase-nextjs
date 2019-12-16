import { notLoggedin } from "../../utils/auth";
import Dashboard from "../../components/Dashboard";

const profile = ({ user }) => {
  return (
    <>
      <Dashboard user={user}>
        <h1>Profile</h1>
      </Dashboard>
    </>
  )
}

profile.getInitialProps = (ctx) => {
  return notLoggedin(ctx)
}

export default profile