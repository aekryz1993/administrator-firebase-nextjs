import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import rootReducer from './reducers/index'
import { rootEpic } from './epics/index'

export default function initStore(initialState) {
  const epicMiddleware = createEpicMiddleware()
  const logger = createLogger({ collapsed: true }) // log every action to see what's happening behind the scenes.
  
  const reduxMiddleware = applyMiddleware(epicMiddleware, logger)

  const store = createStore(rootReducer, initialState, reduxMiddleware)

  const epic$ = new BehaviorSubject(rootEpic);

  const hotReloadingEpic = (...args) =>
    epic$.pipe(
      switchMap(epic => epic(...args))
    );

  epicMiddleware.run(hotReloadingEpic)

  if (module.hot) {
    module.hot.accept('./epics/index', () => {
      const nextRootEpic = require('./epics/index').rootEpic;
      epic$.next(nextRootEpic);
    });

    module.hot.accept('./reducers/index', () => {
      store.replaceReducer(rootReducer());
    });
  }

  return store
}