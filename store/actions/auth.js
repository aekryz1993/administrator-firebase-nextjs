import {
  LOGIN_REQUEST,
  LOGIN_SUCCEED,
  LOGIN_FAILED,
  LOGIN_REQUEST_ENDED,
} from "../actionTypes/auth";

import {
  LOGOUT_REQUEST,
  LOGOUT_REQUEST_SUCCED,
  LOGOUT_REQUEST_FAILED,
  LOGOUT_REQUEST_ENDED,
} from "../actionTypes/auth";

// *************** Login **********************
export const loginRequest = (email, password) => {
  return {
    type: LOGIN_REQUEST,
    payload: {
      email: email,
      password: password,
    }
  }
}

export const loginSucced = (response) => {
  return {
    type: LOGIN_SUCCEED,
    payload: {
      message: response.message,
      error: null
    }
  }
}

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: {
      message: null,
      error: error.message,
    }
  }
}

export const loginRequestEnded = () => ({
  type: LOGIN_REQUEST_ENDED,
})

// *************** Logout **********************
export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const succedLogout = (payload) => ({
  type: LOGOUT_REQUEST_SUCCED,
  payload: {
    message: payload.message,
  }
});

export const failedLogout = (payload) => ({
  type: LOGOUT_REQUEST_FAILED,
  payload: {
    error: payload.message,
  }
});

export const logoutRequestEnded = () => ({
  type: LOGOUT_REQUEST_ENDED
});
