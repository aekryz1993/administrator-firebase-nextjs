import { storage, functions, firestore } from "../lib/db";

// *************** updateProfile **************************
export const updateProfile = (uid) => (displayName, photoURL) => {
  if (!uid || !displayName || !photoURL) return
  return new Promise(async (resolve, reject) => {
    try {
      const updateUserProfile = functions.httpsCallable('updateUserProfile');
      await updateUserProfile({ uid: uid, displayName: displayName, photoURL: photoURL })
      resolve({message: 'Profile has been successfully updated'})
    } catch (error) {
      reject({error: 'update profile has been failed'})
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
export const listenPictureChange = (userId) => (fields, setFields) => {
  return firestore.collection("photoProfileURLs").doc(userId)
    .onSnapshot(doc => {
      setFields({ ...fields, pictureURL: doc.data().thumbnail, listenPicChange: false })
    })
}