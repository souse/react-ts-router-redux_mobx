import { createStore, combineReducers, compose } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History, createBrowserHistory } from 'history'

import { opCount } from './rcount'

declare var window: Window & { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any }

export const history = createBrowserHistory();
const composeEnhancers = (
  process.env.NODE_ENV === 'development' &&
  window &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose

const routerReducer = (history: History<any>) => {
  return combineReducers({
    router: connectRouter(history),
    counter: opCount
  })
}






  