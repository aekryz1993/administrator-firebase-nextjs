import {
  FETCH_USERSESSION,
  FETCH_USERSESSION_SUCCED,
  FETCH_USERSESSION_FAILED,
  FETCH_USERSESSION_ENDED,
  UPDATE_USERSESSION,
  UPDATE_USERSESSION_SUCCED,
  UPDATE_USERSESSION_FAILED,
  UPDATE_USERSESSION_ENDED,
  START_LISTEN_PICTURE_CHANGE,
  STOP_LISTEN_PICTURE_CHANGE,
  LISTENING_PICTURE_CHANGE,
  UPLOAD_PROFILE_PICTURE,
  UPLOAD_PROFILE_PICTURE_SUCCED,
  UPLOAD_PROFILE_PICTURE_FAILED,
  UPLOAD_PROFILE_PICTURE_ENDED,
} from "../actionTypes/userSession";

// *************** Fetch **********************
export const startFetchCurrentUser = () => ({
  type: FETCH_USERSESSION,
});

export const succedFetch = (response) => ({
  type: FETCH_USERSESSION_SUCCED,
  payload: {
    authUser: response.authUser,
    message: response.message,
  }
});

export const failedFetch = (response) => ({
  type: FETCH_USERSESSION_FAILED,
  payload: {
    error: response.error,
  }
});

export const fetchUserFinished = () => ({
  type: FETCH_USERSESSION_ENDED
});

// *************** Update **********************
export const startUpdateCurrentUser = (uid) => (displayName, photoURL) => ({
  type: UPDATE_USERSESSION,
  payload: {
    uid: uid,
    displayName: displayName,
    photoURL: photoURL,
  }
});

export const succedUpdate = (response) => ({
  type: UPDATE_USERSESSION_SUCCED,
  payload: {
    message: response.message,
  }
});

export const failedUpdate = (response) => ({
  type: UPDATE_USERSESSION_FAILED,
  payload: {
    error: response.error,
  }
});

export const updateFinished = () => ({
  type: UPDATE_USERSESSION_ENDED
});

// listen to picture change
export const startListenPictureChange = (uid) => (fields, setFields, setPictureURL) => ({
  type: START_LISTEN_PICTURE_CHANGE,
  payload: {
    uid: uid,
    fields: fields,
    setFields: setFields,
    setPictureURL: setPictureURL,
  }
});

export const listeningPictureChange = () => ({
  type: LISTENING_PICTURE_CHANGE,
  payload: {
    message: 'Start listening',
  }
});

export const stopListenPictureChange = () => ({
  type: STOP_LISTEN_PICTURE_CHANGE,
  payload: {
    message: 'Stop listening',
  }
});

// Upload profile picture
export const uploadProfilePicture = (uid, picture) => (fields, setFields) => ({
  type: UPLOAD_PROFILE_PICTURE,
  payload: {
    uid: uid,
    picture: picture,
    fields: fields,
    setFields: setFields,
  }
})

export const successedUploadProfilePicture = (payload) => ({
  type: UPLOAD_PROFILE_PICTURE_SUCCED,
  payload: {
    message: payload.message,
    uid: payload.uid,
    fields: payload.fields,
    setFields: payload.setFields,
  }
})

export const failedUploadProfilePicture = (payload) => ({
  type: UPLOAD_PROFILE_PICTURE_FAILED,
  payload: {
    message: payload.error,
  }
})

export const uploadProfilePictureFinished = (payload) => ({
  type: UPLOAD_PROFILE_PICTURE_ENDED,
})