import { combineEpics } from 'redux-observable';
import { loginEpic, logoutEpic } from "./auth";

export const rootEpic = combineEpics(
  loginEpic,
  logoutEpic,
)