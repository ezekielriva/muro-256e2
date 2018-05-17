import {combineReducers} from 'redux'

import userReducer from './userReducer';
import wallReducer from './wallReducer';
import uiReducer   from './uiReducer';

export default combineReducers({
  user: userReducer,
  wall: wallReducer,
  ui:   uiReducer
})
