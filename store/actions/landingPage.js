import { 
  FETCH_REQUEST, 
  FETCH_REQUEST_SUCCED, 
  FETCH_REQUEST_FAILED 
} from "../actionTypes/landingPage";

export const startFetchRequest = (title) => ({
  type: FETCH_REQUEST,
  payload: {
    title: title
  }
})

export const successedFetchRequest = (response) => ({
  type: FETCH_REQUEST_SUCCED,
  payload: {
    message: response.message
  }
})

export const failedFetchRequest = (response) => ({
  type: FETCH_REQUEST_FAILED,
  payload: {
    message: response.error
  }
})