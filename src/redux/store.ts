import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { History, createBrowserHistory } from 'history'

import { opCount } from './rcount'

declare var window: Window & { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any }

export const history = createBrowserHistory();

const middlewares = [routerMiddleware(history)];
const composeEnhancers = (
  process.env.NODE_ENV === 'development' &&
  window &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose
const rootReducer = (history: History<any>) => {
  return combineReducers({
    router: connectRouter(history),
    counter: opCount
  })
}
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
// create store
const store = createStore(rootReducer(history), {}, enhancer);

export type RootState = ReturnType<typeof rootReducer>
export default store;





  