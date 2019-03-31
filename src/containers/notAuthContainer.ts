import { connect } from 'react-redux';
import NotAuthPage from '../components/NotAuthPage/NotAuthPage';
import { LoginContainer } from '../containers/loginContainer';

export const NotAuthLoginContainer = connect((state: any) => ({
  loggingIn: state.login.loggingIn
}))(NotAuthPage(LoginContainer));
