// import axios from "axios";
import { storage, functions, database } from "../lib/db";
import { firebase } from "../lib/db";

// *************** Fetch userSession **********************
export const fetchUserSession = () => {
  return new Promise((resolve, reject) => {
    try {
      const authUser = firebase.auth().currentUser
      if (user) {
        resolve({ authUser: authUser, message: 'successful fetch' })
      } else {
        reject({ error: 'there is not user' })
      }
    } catch (error) {
      reject({ error: 'fetch user failed' })
    }
  });
}

// *************** updateProfile **************************
export const updateProfile = (uid) => (displayName, photoURL) => {
  if (!uid || !displayName || !photoURL) return
  return new Promise(async (resolve, reject) => {
    try {
      const updateUserProfile = functions.httpsCallable('updateUserProfile');
      await updateUserProfile({ uid: uid, displayName: displayName, photoURL: photoURL })
      // await axios.post('/api/user', {
      //   uid: uid
      // })
      resolve({ message: 'Profile has been successfully updated' })
    } catch (error) {
      reject({ error: 'update profile has been failed' })
    }
  });
}

// *************** UploadPicture **************************
export const uploadPicture = (userId, picture) => (fields, setFields) => {
  if (!picture || !userId) return;
  return new Promise((resolve, reject) => {
    try {
      const uploadTask = storage.ref(`images/profile/${userId}/${picture.name}`).put(picture)
      return uploadTask.on(
        'state_changed',
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setFields({ ...fields, progress: progress })
          if (progress === 100) setFields({ ...fields, progress: 0 })
        },
        error => {
          console.log(error)
          reject({ error: 'Failed to upload' })
        },
        () => {
          resolve({
            message: 'successfully uploaded',
            uid: userId,
            fields: fields,
            setFields: setFields,
          })
          setFields({ ...fields, listenPicChange: true })
        }
      )
    } catch (error) {
      console.log(error)
      reject({ error: 'Failed to upload' })
    }
  });
}

// ****************** listen picture change *************************
export const listenPictureChange = (userId) => (fields, setFields, setPictureURL) => {
  const profilePictures = database.ref('profilePictures')
  const photoProfileURLs = profilePictures.child(`'photoProfileURLs'/${userId}`)

  return photoProfileURLs.on('value', snapshot => {
    setFields({ ...fields, listenPicChange: false })
    setPictureURL(snapshot.val().thumbnail)
  })
}