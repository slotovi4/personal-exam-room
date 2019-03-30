import { loginTypes } from './types';
import { Dispatch } from 'react';
import { userService } from '../services/userService';

const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = loginTypes;

export const loginUser = (phone: string, password: string) => (
  dispatch: Dispatch<object>
) => {
  userService
    .login(phone, password)
    .then(
      user => dispatch({ type: LOGIN_SUCCESS, token: user.token }),
      (error: string) => dispatch({ type: LOGIN_FAILURE, error })
    );
};

export const logoutUser = () => (dispatch: Dispatch<object>) => {
  userService.logout();
  dispatch({ type: LOGOUT });
};
