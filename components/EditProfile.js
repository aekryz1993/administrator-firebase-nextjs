import { useState, useEffect } from 'react'
import { useAuth } from "../lib/db";
import editProfileStyle from "../stylesheet/components/editProfile.css";
const EditProfile = ({ save, userServer, triggerUpdate }) => {

  const auth = useAuth()

  const [uploadState, setUploadState] = useState(
    {
      image: null,
      displayName: '',
      progress: 0,
      url: ''
    })
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const displayName = auth.user ? auth.user.displayName : userServer.name
    const photoURL = auth.user ? auth.user.photoURL : userServer.picture
    const uid = auth.user ? auth.user.uid : userServer.user_id
    setUploadState({ ...uploadState, displayName: displayName, url: photoURL })
    setUserId(uid)
  }, []);

  useEffect(() => {
    // if (auth.uploadImage(userId, uploadState.image)) {
    const unsubscribe = auth.uploadImage(userId, uploadState.image)
    return () => unsubscribe && unsubscribe()
    // }
  }, [uploadState.image]);

  useEffect(() => {
    // const unsubscribe = auth.getPicProfileUrl(userId)
    if (!userId) return
    const unsubscribe = auth.firestore.collection("photoProfileURLs").doc(userId)
      .onSnapshot(doc => {
        setUploadState({ ...uploadState, url: doc.data().thumbnail })
        console.log(doc.metadata)
      })
    return () => unsubscribe && unsubscribe()
  }, [uploadState.image]);

  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      const image = event.target.files[0]
      setUploadState({ ...uploadState, image: image })
    }
  }

  const handleNameChange = (event) => {

    setUploadState({ ...uploadState, displayName: event.target.value })
  }

  useEffect(() => {
    if (save) {
      auth.updateProfile(userId)(uploadState.displayName, uploadState.url)
      triggerUpdate()
    }
  }, [save]);

  return (
    <div className={`${editProfileStyle.container}`}>
      <div>
        <img
          className={`${editProfileStyle.picProfile}`}
          src={uploadState.url || 'auth.user.photoURL'}
        />
        {/* <div className={`${editProfileStyle.changePic}`} onClick={} /> */}
        <input type="file" name="profile" onChange={handleFileChange} className={`${editProfileStyle.changePic}`} />
      </div>
      <div className={`${editProfileStyle.nameContainer}`}>
        <label htmlFor="name" className={`${editProfileStyle.labelName}`}>Name</label>
        <input
          className={`${editProfileStyle.inputName}`}
          type="text"
          id="name"
          name="name"
          placeholder="Add your name"
          value={uploadState.displayName}
          onChange={handleNameChange}
        />
      </div>
    </div>
  )
}

export default EditProfile