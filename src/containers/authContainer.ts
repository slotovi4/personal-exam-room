import { connect } from 'react-redux';
import { ProfileContainer } from '../containers/profileContainer';
import { ExamsContainer } from '../containers/examsContainer';
import AuthPage from '../components/AuthPage/AuthPage';
import Home from '../components/Home/Home';

export const AuthHomeContainer = connect((state: any) => ({
  loggingIn: state.login.loggingIn,
  theme: state.theme.theme
}))(AuthPage(Home));

export const AuthProfileContainer = connect((state: any) => ({
  loggingIn: state.login.loggingIn,
  theme: state.theme.theme
}))(AuthPage(ProfileContainer));

export const AuthExamsContainer = connect((state: any) => ({
  loggingIn: state.login.loggingIn,
  theme: state.theme.theme
}))(AuthPage(ExamsContainer));
