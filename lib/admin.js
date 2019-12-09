'use strict'

const uploadImage = (storage) => (userId, image) => {
  if (!image || !userId) return;
  const uploadTask = storage.ref(`images/profile/${userId}/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log('Upload is ' + progress + '% done');
      },
      error => {
        console.log(error)
      },
    )  
}

const getPicProfileUrl = (firestore) => async (uid) => {
  try {
    const photoProfileURLs = firestore.collection("photoProfileURLs").doc(uid);
    const doc = await photoProfileURLs.get()
    if (doc.exists) {
      console.log(doc.data().thumbnail)
      return doc.data().thumbnail
    }
    return console.log("No such document!");
  } catch (error) {
    console.log("Error getting document:", error);
  }
}