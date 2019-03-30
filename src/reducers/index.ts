import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  login: loginReducer,
  profile: profileReducer
});
