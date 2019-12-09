import Sidenav from "./Sidenav";
import dashboardStyle from "../stylesheet/layouts/dashboard.css";
import NavBar from "./Navbar";

const Dashboard = ({children, user}) => {
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