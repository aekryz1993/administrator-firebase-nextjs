import Sidenav from "./Sidenav";
import dashboardStyle from "../stylesheet/layouts/dashboard.css";

const Dashboard = ({children}) => {
  return (
    <>
      <Sidenav />
      <main className={dashboardStyle.main}>
        {children}
      </main>
    </>
  )
}

export default Dashboard