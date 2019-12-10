import {
  FETCH_USERSESSION_SUCCED,
  FETCH_USERSESSION_FAILED,
  FETCH_USERSESSION_ENDED,
} from "../actionTypes/userSession";

import {
  UPDATE_USERSESSION_SUCCED,
  UPDATE_USERSESSION_FAILED,
  UPDATE_USERSESSION_ENDED,
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
export const updateUserSessionReducer = (state = {redirect: false}, action) => {
  switch (action.type) {
  case UPDATE_USERSESSION_SUCCED:
    return {
      ...state,
      message: action.payload.message,
      redirect: true
    };
  case UPDATE_USERSESSION_FAILED:
    return {
      ...state,
      message: action.payload.error,
      redirect: false
    };
  case UPDATE_USERSESSION_ENDED:
    return {
      ...state,
      redirect: false
    };
  default:
    return state;
  }
};