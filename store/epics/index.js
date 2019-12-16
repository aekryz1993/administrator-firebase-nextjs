import { combineEpics } from 'redux-observable';
import { loginEpic, logoutEpic } from "./auth";
import { 
  uploadPictureProfileEpic, 
  listenPictureChangeEpic, 
  updateUserSessionEpic, 
  fetchUserSessionEpic
} from './userSession';
import { editLandingPageEpic } from './landingPage';

export const rootEpic = combineEpics(
  loginEpic,
  logoutEpic,
  uploadPictureProfileEpic,
  listenPictureChangeEpic,
  updateUserSessionEpic,
  fetchUserSessionEpic,
  editLandingPageEpic,
)