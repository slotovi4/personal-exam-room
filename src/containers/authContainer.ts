import { connect } from 'react-redux';
import UserIsAuthenticated from '../components/UserIsAuthenticated/UserIsAuthenticated';
import { HomeContainer } from '../containers/homeContainer';
import { ProfileContainer } from '../containers/profileContainer';
import { ExamsContainer } from '../containers/examsContainer';

export const AuthHomeContainer = connect((state: any) => ({
  loggingIn: state.login.loggingIn
}))(UserIsAuthenticated(HomeContainer));

export const AuthProfileContainer = connect((state: any) => ({
  loggingIn: state.login.loggingIn
}))(UserIsAuthenticated(ProfileContainer));

export const AuthExamsContainer = connect((state: any) => ({
  loggingIn: state.login.loggingIn
}))(UserIsAuthenticated(ExamsContainer));
