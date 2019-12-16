import Dashboard from "../../components/Dashboard";
import { notLoggedin } from "../../utils/auth";

const blogs = ({ user }) => {
  return (
    <Dashboard user={user}>

    </Dashboard>
  )
}

blogs.getInitialProps = (ctx) => {
  return notLoggedin(ctx)
}

export default blogs