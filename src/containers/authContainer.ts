import { connect } from 'react-redux';
import AuthPage from '../components/AuthPage/AuthPage';
import Home from '../components/Home/Home';
import { ProfileContainer } from '../containers/profileContainer';
import { ExamsContainer } from '../containers/examsContainer';

export const AuthHomeContainer = connect((state: any) => ({
  loggingIn: state.login.loggingIn
}))(AuthPage(Home));

export const AuthProfileContainer = connect((state: any) => ({
  loggingIn: state.login.loggingIn
}))(AuthPage(ProfileContainer));

export const AuthExamsContainer = connect((state: any) => ({
  loggingIn: state.login.loggingIn
}))(AuthPage(ExamsContainer));
