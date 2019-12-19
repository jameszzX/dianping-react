import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import api from './middleware/api'
import rootReducer from './modules'

let store

if (
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  const composeEnhancers =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, api))
  )
} else {
  store = createStore(rootReducer, applyMiddleware(thunk, api))
}

export default store
