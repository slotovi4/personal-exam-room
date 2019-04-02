import { connect, ConnectedComponentClass } from 'react-redux';
import { LoginContainer } from '../containers/loginContainer';
import { IGlobalState } from '../actions/interface';
import NotAuthPage from '../components/NotAuthPage/NotAuthPage';

const NotAuthContainer = (
  component:
    | ConnectedComponentClass<any, any>
    | React.ClassicComponentClass
    | React.FunctionComponent
) =>
  connect((state: IGlobalState) => ({
    loggingIn: state.login.loggingIn
  }))(NotAuthPage(component));

export const NotAuthLoginContainer = NotAuthContainer(LoginContainer);
