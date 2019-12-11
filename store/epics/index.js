import { combineEpics } from 'redux-observable';
import { loginEpic, logoutEpic } from "./auth";
import { 
  uploadPictureProfileEpic, 
  listenPictureChangeEpic, 
  updateUserSessionEpic 
} from './userSession';

export const rootEpic = combineEpics(
  loginEpic,
  logoutEpic,
  uploadPictureProfileEpic,
  listenPictureChangeEpic,
  updateUserSessionEpic,
)