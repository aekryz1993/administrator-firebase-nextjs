import Dashboard from "../../components/Dashboard";
import { notLoggedin } from "../../utils/auth";

const messages = ({ user }) => {
  return (
    <Dashboard user={user}>
      messages
    </Dashboard>
  )
}

messages.getInitialProps = (ctx) => {
  return notLoggedin(ctx)
}

export default messages