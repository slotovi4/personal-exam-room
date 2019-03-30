import { connect } from 'react-redux';
import UserIsNotAuthenticated from '../components/UserIsNotAuthenticated/UserIsNotAuthenticated';
import { LoginContainer } from '../containers/loginContainer';

export const NotAuthLoginContainer = connect((state: any) => ({
  loggingIn: state.login.loggingIn
}))(UserIsNotAuthenticated(LoginContainer));
