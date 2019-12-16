import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { userSessionReducer, updateUserSessionReducer, uploadPictureProfileReducer, listenPictureChangeReducer } from "./userSession";
import { loginReducer, logoutReducer } from "./auth";
import { LOGIN_REQUEST } from "../actionTypes/auth";
import { editLandingPageReducer } from './landingPage';
import { FETCH_REQUEST } from '../actionTypes/landingPage';

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  logoutReducer: logoutReducer,
  userSessionReducer: userSessionReducer,
  updateUserSessionReducer: updateUserSessionReducer,
  uploadPictureProfileReducer: uploadPictureProfileReducer,
  listenPictureChangeReducer: listenPictureChangeReducer,
  editLandingPageReducer: editLandingPageReducer,

  form: formReducer.plugin({
    login: (state, action) => {
      switch (action.type) {
        case LOGIN_REQUEST:
          return undefined;
        default:
          return state;
      }
    },
    editLandingPage: (state, action) => {
      switch (action.type) {
        case FETCH_REQUEST:
          return undefined;
        default:
          return state;
      }
    },
  })
})

export default rootReducer;