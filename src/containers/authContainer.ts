import { connect } from 'react-redux';
import UserIsAuthenticated from '../components/UserIsAuthenticated/UserIsAuthenticated';
import { HomeContainer } from '../containers/homeContainer';
import { ProfileContainer } from '../containers/profileContainer';

export const AuthHomeContainer = connect((state: any) => ({
  loggingIn: state.login.loggingIn
}))(UserIsAuthenticated(HomeContainer));

export const AuthProfileContainer = connect((state: any) => ({
  loggingIn: state.login.loggingIn
}))(UserIsAuthenticated(ProfileContainer));
