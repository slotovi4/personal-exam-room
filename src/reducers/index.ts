import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';
import examsReducer from './examsReducer';

export default combineReducers({
  login: loginReducer,
  profile: profileReducer,
  exams: examsReducer
});
