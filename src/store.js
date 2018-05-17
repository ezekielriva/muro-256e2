import { createStore, applyMiddleware } from 'redux'
import rootReducer  from './reducers'
import thunk from 'redux-thunk'

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
)

export default store
