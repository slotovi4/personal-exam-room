import { connect } from 'react-redux';
import UserIsAuthenticated from '../components/UserIsAuthenticated/UserIsAuthenticated';
import { HomeContainer } from '../containers/homeContainer';

export const AuthHomeContainer = connect((state: any) => ({
  loggingIn: state.login.loggingIn
}))(UserIsAuthenticated(HomeContainer));
