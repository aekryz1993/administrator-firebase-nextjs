import Sidenav from "./Sidenav";
import dashboardStyle from "../stylesheet/layouts/dashboard.css";
import NavBar from "./Navbar";

const Dashboard = ({children}) => {
  return (
    <>
      <Sidenav />
      <main className={dashboardStyle.main}>  
        <NavBar />
        {children}
      </main>
    </>
  )
}

export default Dashboard