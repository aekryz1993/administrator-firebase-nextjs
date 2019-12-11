import Sidenav from "./Sidenav";
import dashboardStyle from "../stylesheet/layouts/dashboard.css";
import NavBar from "./Navbar";
import { firebase } from "../lib/db";

const Dashboard = ({user, children}) => {
  
  user = user ? user : firebase.auth().currentUser
  return (
    <>
      <Sidenav />
      <main className={dashboardStyle.main}>  
        <NavBar user={user} />
        {children}
      </main>
    </>
  )
}

export default Dashboard