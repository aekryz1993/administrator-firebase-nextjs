import { useState, useEffect, useRef } from "react";
import navbarStyle from "../stylesheet/components/navbar.css";
import EditProfileContainer from "../userSession/EditProfileContainer";
import LogoutContainer from "../auth/LogoutContainer";

const NavBar = ({ user }) => {

  const [show, setShow] = useState(false);
  const [close, setClose] = useState(false);
  const [name, setName] = useState( user.displayName || user.name);
  const [photoURL, setPhotoURL] = useState(user.photoURL || user.picture);

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
              src={photoURL}
            />
            <span className={navbarStyle.username}>{name}</span>
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
                <div className={navbarStyle.dropdownContentLine} />
                <div className={navbarStyle.dropdownContentItems}><LogoutContainer/></div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div className={`${navbarStyle.editProfile} ${displayEditProfile()}`} ref={editProfile}>
        <EditProfileContainer
          setClose={setClose}
          userServer={user}
          setName={setName}
          setPhotoURL={setPhotoURL}
        />
      </div>
    </div>
  )
}

export default NavBar