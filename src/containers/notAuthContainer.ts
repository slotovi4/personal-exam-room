import { connect, ConnectedComponentClass } from 'react-redux';
import { LoginContainer } from '../containers/loginContainer';
import NotAuthPage from '../components/NotAuthPage/NotAuthPage';

const NotAuthContainer = (
  component:
    | ConnectedComponentClass<any, any>
    | React.ClassicComponentClass
    | React.FunctionComponent
) =>
  connect((state: any) => ({
    loggingIn: state.login.loggingIn
  }))(NotAuthPage(component));

export const NotAuthLoginContainer = NotAuthContainer(LoginContainer);
