import { map, tap, delay, mergeMap, catchError } from "rxjs/operators";
import { ofType } from 'redux-observable';
import { of, from } from "rxjs";
import { FETCH_REQUEST } from "../actionTypes/landingPage";
import { changeTitle } from "../../containers/landingPage/section1/sec1-api";
import { successedFetchRequest, failedFetchRequest } from "../actions/landingPage";
import { edit } from "../../containers/landingPage/api-landingPage";

// ************** fetch userSession **************************
export const editLandingPageEpic = action$ => action$.pipe(
  ofType(FETCH_REQUEST),
  mergeMap(action => from(edit(changeTitle, action.payload.title))
    .pipe(
      map(response => successedFetchRequest(response)),
      catchError(response => of(failedFetchRequest(response))),
    ))
)