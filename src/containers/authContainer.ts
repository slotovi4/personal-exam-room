import { connect } from 'react-redux';
import { ProfileContainer } from '../containers/profileContainer';
import { ExamsContainer } from '../containers/examsContainer';
import AuthPage from '../components/AuthPage/AuthPage';
import Home from '../components/Home/Home';

const AuthContainer = (component: any) =>
  connect((state: any) => ({
    loggingIn: state.login.loggingIn,
    theme: state.theme.theme
  }))(AuthPage(component));

export const AuthHomeContainer = AuthContainer(Home);
export const AuthProfileContainer = AuthContainer(ProfileContainer);
export const AuthExamsContainer = AuthContainer(ExamsContainer);
