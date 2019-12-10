import {
  FETCH_USERSESSION,
  FETCH_USERSESSION_SUCCED,
  FETCH_USERSESSION_FAILED,
  FETCH_USERSESSION_ENDED,
} from "../actionTypes/userSession";

import {
  UPDATE_USERSESSION,
  UPDATE_USERSESSION_SUCCED,
  UPDATE_USERSESSION_FAILED,
  UPDATE_USERSESSION_ENDED,
} from "../actionTypes/userSession";

// *************** Fetch **********************
export const startFetchCurrentUser = () => ({
  type: FETCH_USERSESSION,
});

export const succedFetch = (payload) => ({
  type: FETCH_USERSESSION_SUCCED,
  payload: {
    email: payload.data.email,
  }
});

export const failedFetch = (payload) => ({
  type: FETCH_USERSESSION_FAILED,
  payload: {
    error: 'DOESN\'T AUTHORIZED',
  }
});

export const logoutFinished = () => ({
  type: FETCH_USERSESSION_ENDED
});

// *************** Update **********************
export const startUpdateCurrentUser = (payload) => ({
  type: UPDATE_USERSESSION,
  payload: payload
});

export const succedUpdate = (payload) => ({
  type: UPDATE_USERSESSION_SUCCED,
  payload: {
    message: payload.data.message,
  }
});

export const failedUpdate = (payload) => ({
  type: UPDATE_USERSESSION_FAILED,
  payload: {
    error: payload.message,
  }
});

export const updateFinished = () => ({
  type: UPDATE_USERSESSION_ENDED
});