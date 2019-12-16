import { useState, useRef } from "react";
import Dashboard from "../../components/Dashboard";
import { notLoggedin } from "../../utils/auth";
import landingPageStyle from "../../stylesheet/components/landingPage/landingPage.css";
import Sec1Container from "../../containers/landingPage/section1/Sec1Container";

const landingPage = ({ user }) => {

  const [active, setActive] = useState({
    sec1: true,
    sec2: false,
    sec3: false,
    sec4: false,
  })

  const sec1 = useRef(false);
  const sec2 = useRef(false);
  const sec3 = useRef(false);
  const sec4 = useRef(false);

  const handleClick = (event) => {
    if(sec1.current.contains(event.target)) setActive({sec1: true, sec2: false, sec3: false, sec4: false})
    if(sec2.current.contains(event.target)) setActive({sec1: false, sec2: true, sec3: false, sec4: false})
    if(sec3.current.contains(event.target)) setActive({sec1: false, sec2: false, sec3: true, sec4: false})
    if(sec4.current.contains(event.target)) setActive({sec1: false, sec2: false, sec3: false, sec4: true})
  } 

  const activeSection1 = () => {
    return (active.sec1) ? landingPageStyle.active : ''
  }
  const activeSection2 = () => {
    return (active.sec2) ? landingPageStyle.active : ''
  }
  const activeSection3 = () => {
    return (active.sec3) ? landingPageStyle.active : ''
  }
  const activeSection4 = () => {
    return (active.sec4) ? landingPageStyle.active : ''
  }

  return (
    <Dashboard user={user}>
      <div className={landingPageStyle.container}>
        <h1 className={landingPageStyle.h1}>Landing page</h1>
        <div className={landingPageStyle.nav}>
          <span
            className={`${landingPageStyle.navItem} ${activeSection1()}`}
            ref={sec1}
            onClick={handleClick}
          >
            Section 1
          </span>
          <span
            className={`${landingPageStyle.navItem} ${activeSection2()}`}
            ref={sec2}
            onClick={handleClick}
          >
            Section 2
          </span>
          <span
            className={`${landingPageStyle.navItem} ${activeSection3()}`}
            ref={sec3}
            onClick={handleClick}
          >
            Section 3
          </span>
          <span
            className={`${landingPageStyle.navItem} ${activeSection4()}`}
            ref={sec4}
            onClick={handleClick}
          >
            Section 4
          </span>
        </div>
        <div className={landingPageStyle.dashboard}>
          {active.sec1 && <Sec1Container/>}
        </div>
      </div>
    </Dashboard>
  )
}

landingPage.getInitialProps = (ctx) => {
  return notLoggedin(ctx)
}

export default landingPage