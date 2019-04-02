import { connect, ConnectedComponentClass } from 'react-redux';
import { ProfileContainer } from '../containers/profileContainer';
import { ExamsContainer } from '../containers/examsContainer';
import AuthPage from '../components/AuthPage/AuthPage';
import Home from '../components/Home/Home';

const AuthContainer = (
  component:
    | ConnectedComponentClass<any, any>
    | React.ClassicComponentClass
    | React.FunctionComponent
) =>
  connect((state: any) => ({
    loggingIn: state.login.loggingIn,
    theme: state.theme.theme
  }))(AuthPage(component));

export const AuthHomeContainer = AuthContainer(Home);
export const AuthProfileContainer = AuthContainer(ProfileContainer);
export const AuthExamsContainer = AuthContainer(ExamsContainer);
