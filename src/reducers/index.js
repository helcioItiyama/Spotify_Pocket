import { combineReducers } from 'redux';

import appReducer from './appReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import contentReducer from './contentReducer';

const reducers = combineReducers({
  appReducer,
  userReducer,
  authReducer,
  contentReducer
})

export default reducers;