import { connect } from 'react-redux';
import { loginUser } from '../actions/loginActions';
import Login from '../components/Login/Login';

export const LoginContainer = connect(
  null,
  { loginUser }
)(Login);
