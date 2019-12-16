import { map, tap, delay, mergeMap, catchError, mapTo } from "rxjs/operators";
import { ofType } from 'redux-observable';
import { of, from } from "rxjs";
import {
  UPLOAD_PROFILE_PICTURE,
  START_LISTEN_PICTURE_CHANGE,
  UPDATE_USERSESSION,
  FETCH_USERSESSION
} from "../actionTypes/userSession";
import { uploadPicture, listenPictureChange, updateProfile, fetchUserSession } from "../../userSession/apis-userSession";
import {
  successedUploadProfilePicture,
  failedUploadProfilePicture,
  stopListenPictureChange,
  succedUpdate,
  failedUpdate,
  succedFetch,
  failedFetch,
} from "../actions/userSession";

// ************** fetch userSession **************************
export const fetchUserSessionEpic = action$ => action$.pipe(
  ofType(FETCH_USERSESSION),
  mergeMap(() => from(fetchUserSession())
    .pipe(
      map(response => succedFetch(response)),
      catchError(response => failedFetch(response)),
    )
  )
)

// ************** Upload picture profile *********************
export const uploadPictureProfileEpic = action$ => action$.pipe(
  ofType(UPLOAD_PROFILE_PICTURE),
  mergeMap(action => from(uploadPicture(
    action.payload.uid,
    action.payload.picture,
  )(
    action.payload.fields,
    action.payload.setFields,
  )).pipe(
    map(response => successedUploadProfilePicture(response)),
    catchError(error => of(failedUploadProfilePicture(error))),
  )),

)

// ************** listen to picture profile change *********************
export const listenPictureChangeEpic = action$ => action$.pipe(
  ofType(START_LISTEN_PICTURE_CHANGE),
  mergeMap(action => of(listenPictureChange(
    action.payload.uid,
  )(
    action.payload.fields,
    action.payload.setFields,
    action.payload.setPictureURL,
  )).pipe(
    map(() => stopListenPictureChange()),
  ))
)

// ************** Update profile userSession *********************
export const updateUserSessionEpic = action$ => action$.pipe(
  ofType(UPDATE_USERSESSION),
  mergeMap(action => from(updateProfile(
    action.payload.uid
  )(
    action.payload.displayName,
    action.payload.photoURL,
  ))
    .pipe(
      map(response => succedUpdate(response)),
      catchError(response => failedUpdate(response)),
    ))
)