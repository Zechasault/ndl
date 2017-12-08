import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import * as reducers from 'ducks'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'

const rootReducer = combineReducers(reducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [
  thunk,
  apiMiddleware
]

function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )
}

export default configureStore