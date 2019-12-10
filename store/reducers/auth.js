import {
  LOGIN_SUCCEED,
  LOGIN_FAILED
} from "../actionTypes/auth";

import {
  LOGOUT_REQUEST_SUCCED,
  LOGOUT_REQUEST_FAILED
} from "../actionTypes/auth";

export const loginReducer = (state = { redirect: false }, action) => {
  switch (action.type) {
    case LOGIN_SUCCEED:
      return {
        ...state,
        message: action.payload.message,
        redirect: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        message: action.payload.error,
        redirect: false,
      };
    default:
      return state;
  }
};

export const logoutReducer = (state = { redirect: false }, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST_SUCCED:
      return {
        ...state,
        message: action.payload.message,
        redirect: true,
      };
    case LOGOUT_REQUEST_FAILED:
      return {
        ...state,
        message: action.payload.error,
        redirect: false,
      };
    default:
      return state;
  }
}