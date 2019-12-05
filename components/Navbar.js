import { useState, useEffect, useRef } from "react";
import EditProfile from "./EditProfile";
import navbarStyle from "../stylesheet/components/navbar.css";

const NavBar = () => {

  const [show, setShow] = useState(false);
  const [close, setClose] = useState(false);

  const node = useRef();
  const node2 = useRef();
  const editProfile = useRef();

  useEffect(() => {

    document.addEventListener("mousedown", handleClickCloseDropdown);

    return () => {
      document.removeEventListener("mousedown", handleClickCloseDropdown);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickCloseEditprofile);

    return () => {
      document.removeEventListener("mousedown", handleClickCloseEditprofile);
    };
  }, []);

  // Dropdown display and close
  const handleClickDropdown = () => {
    return show ? setShow(false) : setShow(true)
  }

  const handleClickCloseDropdown = (e) => {
    if (node.current.contains(e.target) || node2.current.contains(e.target)) {
      return;
    }
    setShow(false)
  }

  const displayDropdownContent = () => {
    return show ? navbarStyle.displayCnt : ''
  }

  const activeDropdownbtn = () => {
    return show ? navbarStyle.dropbtnActive : ''
  }

  // EditProfile display and close
  const handleClickCloseEditprofile = (e) => {
    if (editProfile.current && editProfile.current.contains(e.target)) {
      return;
    }
    setClose(false)
  }

  const handleClickEditProfile = () => {
    setShow(false)
    return close ? setClose(false) : setClose(true)
  }

  const handleClickCloseEditProfilebtn = () => {
    setClose(false)
  }

  const displayEditProfile = () => {
    return close ? navbarStyle.displayEditProfile : ''
  }

  return (
    <div className={`${navbarStyle.nav} ${navbarStyle.clearfix}`}>
      <div onClick={() => handleState()} className={navbarStyle.showNav}>
        <div className={`${navbarStyle.line}`}></div>
        <div className={`${navbarStyle.line}`}></div>
        <div className={`${navbarStyle.line}`}></div>
      </div>
      <nav className={`${navbarStyle.container}`}>
        <ul className={`${navbarStyle.navLinks}`}>
          <li className={`${navbarStyle.navItem}`}>
            <div className={navbarStyle.bilama}></div>
          </li>
          <li className={`${navbarStyle.navItem}`}>
            <div className={navbarStyle.bilama} ref={node}></div>
          </li>
          <li className={`${navbarStyle.navItem} ${navbarStyle.profileInfo}`}>
            <img
              className={`${navbarStyle.picProfile}`}
              src='https://via.placeholder.com/400x300'
            />
            <span className={navbarStyle.username}>Riazi Abdelkader</span>
            <div className={navbarStyle.dropdown} >
              <div
                className={`${navbarStyle.dropbtn} ${activeDropdownbtn()}`}
                onClick={handleClickDropdown}
                ref={node2}
              >
              </div>
              <div className={`${navbarStyle.dropdownContent} ${displayDropdownContent()}`} ref={node}>
                <div className={navbarStyle.dropdownContentItems} onClick={handleClickEditProfile}>Update Profile</div>
                <div className={navbarStyle.dropdownContentItems}>About</div>
                <div className={navbarStyle.dropdownContentItems}>Contact</div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div className={`${navbarStyle.editProfile} ${displayEditProfile()}`} ref={editProfile}>
        <nav className={`${navbarStyle.editprofileNav} ${navbarStyle.clearfix}`}>
          <div className={`${navbarStyle.firstItem}`}>
            <div className={`${navbarStyle.closebtn}`} onClick={handleClickCloseEditProfilebtn}>
              <div className={`${navbarStyle.closeline}`}></div>
              <div className={`${navbarStyle.closeline}`}></div>
            </div>
          </div>
          <div className={`${navbarStyle.secondItem}`}>
            <span className={`${navbarStyle.title}`}>Edit profile</span>
          </div>
          <div className={`${navbarStyle.thirdItem}`}>
            <div className={`${navbarStyle.savebtn}`}>Save</div>
          </div>
        </nav>
        <EditProfile/>
      </div>
    </div>
  )
}

export default NavBar