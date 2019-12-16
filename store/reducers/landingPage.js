import { FETCH_REQUEST_SUCCED, FETCH_REQUEST_FAILED } from "../actionTypes/landingPage";

// ********************* edit *************************
export const editLandingPageReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_REQUEST_SUCCED:
      return {
        ...state,
        authUser: action.payload.authUser,
        message: action.payload.message
      };
    case FETCH_REQUEST_FAILED:
      return {
        ...state,
        message: action.payload.error,
      };
    default:
      return state;
  }
};