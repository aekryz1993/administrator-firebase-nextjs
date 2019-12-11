import { ofType } from 'redux-observable';
import { mergeMap, map, tap, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import Router from "next/router";
import { loginSucced, loginFailed, succedLogout, failedLogout } from '../actions/auth';
import { LOGIN_REQUEST, LOGOUT_REQUEST } from "../actionTypes/auth";
import { login, logout } from "../../auth/apis-auth";

// ******************* Login ****************************
export const loginEpic = action$ => action$.pipe(
  ofType(LOGIN_REQUEST),
  mergeMap(action => from(login(action.payload.email, action.payload.password))
    .pipe(
      map(response => loginSucced(response)),
      tap(() => Router.push('/dashboard/profile')),
      catchError(error => of(loginFailed(error))),
    )
  )
)

// ******************* Logout ****************************
export const logoutEpic = action$ => action$.pipe(
  ofType(LOGOUT_REQUEST),
  mergeMap(() => from(logout())
    .pipe(
      map(response => succedLogout(response)),
      tap(() => Router.push('/')),
      catchError(error => failedLogout(error)),
    )
  )
)