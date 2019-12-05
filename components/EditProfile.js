import editProfileStyle from "../stylesheet/components/editProfile.css";

const EditProfile = () => {
  return (
    <div className={`${editProfileStyle.container}`}>
      <div>
        <img
          className={`${editProfileStyle.picProfile}`}
          src='https://via.placeholder.com/400x300'
        />
        <div className={`${editProfileStyle.changePic}`} />
      </div>
      <div className={`${editProfileStyle.nameContainer}`}>
        <label for="name" className={`${editProfileStyle.labelName}`}>Name</label>
        <input
          className={`${editProfileStyle.inputName}`}
          type="text"
          id="name"
          name="name"
          placeholder="Add your name"
        />
      </div>
    </div>
  )
}

export default EditProfile