import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { userSessionReducer, updateUserSessionReducer } from "./userSession";
import { loginReducer, logoutReducer } from "./auth";
import { LOGIN_REQUEST } from "../actionTypes/auth";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  logoutReducer: logoutReducer,
  userSessionReducer: userSessionReducer,
  updateUserSessionReducer: updateUserSessionReducer,

  form: formReducer.plugin({
    login: (state, action) => {
      switch (action.type) {
        case LOGIN_REQUEST:
          return undefined;
        default:
          return state;
      }
    },
  })
})

export default rootReducer;