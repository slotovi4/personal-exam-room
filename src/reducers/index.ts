import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';
import examsReducer from './examsReducer';
import alertReducer from './alertReducer';
import themeReducer from './themeReducer';

export default combineReducers({
  login: loginReducer,
  profile: profileReducer,
  exams: examsReducer,
  alert: alertReducer,
  theme: themeReducer
});
