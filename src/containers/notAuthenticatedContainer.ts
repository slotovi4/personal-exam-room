import UserIsNotAuthenticated from '../components/UserIsNotAuthenticated/UserIsNotAuthenticated';
import { LoginContainer } from './loginContainer';

export const LoginNotAuthContainer = UserIsNotAuthenticated(LoginContainer);
