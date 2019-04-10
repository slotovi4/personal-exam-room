import { connect, ConnectedComponentClass } from 'react-redux';
import { ProfileContainer } from '../containers/profileContainer';
import { ExamsContainer } from '../containers/examsContainer';
import { IGlobalState } from '../actions/interface';
import AuthPage from '../components/AuthPage/AuthPage';
import Home from '../components/Home/Home';

const AuthContainer = (
  component:
    | ConnectedComponentClass<any, any>
    | React.ClassicComponentClass
    | React.FunctionComponent
) =>
  connect((state: IGlobalState) => ({
    loggingIn: state.login.loggingIn,
    theme: state.theme.theme
  }))(AuthPage(component, '/login'));

export const AuthHomeContainer = AuthContainer(Home);
export const AuthProfileContainer = AuthContainer(ProfileContainer);
export const AuthExamsContainer = AuthContainer(ExamsContainer);
