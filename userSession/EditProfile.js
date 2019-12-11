import { useState, useEffect, useRef } from "react";
import editProfileStyle from "../stylesheet/components/editProfile.css";

const EditProfile = ({
  userServer,
  message,
  setClose,
  uploadProfilePicture,
  startListenPictureChange,
  startUpdateCurrentUser,
  setPhotoURL,
  setName,
}) => {

  const [fields, setFields] = useState({
    picture: null,
    displayName: userServer.name || userServer.displayName,
    pictureURL: userServer.picture || userServer.photoURL,
    progress: 0,
    listenPicChange: false,
  })

  useEffect(() => {
    if(!fields.listenPicChange) return
    startListenPictureChange(userServer.user_id || userServer.uid, fields, setFields)
  }, [fields.listenPicChange]);

  const handleClickCloseEditProfilebtn = () => {
    setClose(false)
  }

  const handleSaveClick = () => {
    startUpdateCurrentUser(userServer.user_id || userServer.uid, fields.displayName, fields.pictureURL)
    setPhotoURL(fields.pictureURL)
    setName(fields.displayName)
  }

  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      const picture = event.target.files[0]
      setFields({ ...fields, picture: picture })
      return uploadProfilePicture(userServer.user_id || userServer.uid, picture, fields, setFields)
    }
  }

  const handleNameChange = (event) => {
    setFields({ ...fields, displayName: event.target.value })
  }

  return (
    <form>
      <nav className={`${editProfileStyle.editprofileNav} ${editProfileStyle.clearfix}`}>
        <div className={`${editProfileStyle.firstItem}`}>
          <div className={`${editProfileStyle.closebtn}`} onClick={handleClickCloseEditProfilebtn}>
            <div className={`${editProfileStyle.closeline}`}></div>
            <div className={`${editProfileStyle.closeline}`}></div>
          </div>
        </div>
        <div className={`${editProfileStyle.secondItem}`}>
          <span className={`${editProfileStyle.title}`}>Edit profile</span>
        </div>
        <div className={`${editProfileStyle.thirdItem}`}>
          <div className={`${editProfileStyle.savebtn}`} onClick={handleSaveClick}>Save</div>
        </div>
      </nav>

      <div className={`${editProfileStyle.container}`}>
        <div>
          <img
            className={`${editProfileStyle.picProfile}`}
            src={fields.pictureURL || 'auth.user.photoURL'}
          />
          <input
            className={`${editProfileStyle.changePic}`}
            type="file"
            name="profile"
            onChange={handleFileChange}
          />
          {fields.progress > 0 && <progress value={fields.progress} max="100" />}
        </div>
        <div className={`${editProfileStyle.nameContainer}`}>
          <label htmlFor="name" className={`${editProfileStyle.labelName}`}>Name</label>
          <input
            className={`${editProfileStyle.inputName}`}
            type="text"
            id="name"
            name="name"
            placeholder="Add your name"
            value={fields.displayName}
            onChange={handleNameChange}
          />
        </div>
      </div>
    </form>
  )
}

export default EditProfile