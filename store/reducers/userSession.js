import {
  FETCH_USERSESSION_SUCCED,
  FETCH_USERSESSION_FAILED,
  FETCH_USERSESSION_ENDED,
  START_LISTEN_PICTURE_CHANGE,
  STOP_LISTEN_PICTURE_CHANGE,
  UPDATE_USERSESSION_SUCCED,
  UPDATE_USERSESSION_FAILED,
  UPDATE_USERSESSION_ENDED,
  UPLOAD_PROFILE_PICTURE_FAILED,
  UPLOAD_PROFILE_PICTURE_SUCCED,
} from "../actionTypes/userSession";

// ********************* Fetch *************************
export const userSessionReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERSESSION_SUCCED:
      return {
        ...state,
        email: action.payload.email
      };
    case FETCH_USERSESSION_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    case FETCH_USERSESSION_ENDED:
      return {
        ...state,
      }
    default:
      return state;
  }
};

// ********************* Update *************************
export const updateUserSessionReducer = (state = {}, action) => {
  switch (action.type) {
  case UPDATE_USERSESSION_SUCCED:
    return {
      ...state,
      message: action.payload.message,
    };
  case UPDATE_USERSESSION_FAILED:
    return {
      ...state,
      message: action.payload.error,
    };
  default:
    return state;
  }
};

// ********************* Listen to picture change *************************
export const listenPictureChangeReducer = (state = {listen: false}, action) => {
  switch (action.type) {
  case START_LISTEN_PICTURE_CHANGE:
    return {
      ...state,
      listen: true
    };
  case STOP_LISTEN_PICTURE_CHANGE:
    return {
      ...state,
      listen: false
    };
  default:
    return state;
  }
};

// ********************* Upload profile picture *************************
export const uploadPictureProfileReducer = (state = {}, action) => {
  switch (action.type) {
  case UPLOAD_PROFILE_PICTURE_SUCCED:
    return {
      ...state,
      message: action.payload.message,
    };
  case UPLOAD_PROFILE_PICTURE_FAILED:
    return {
      ...state,
      message: action.payload.error,
    };
  default:
    return state;
  }
};