import { loginTypes, alertTypes } from './types';
import { Dispatch } from 'react';
import { userService } from '../services/userService';

const { LOGIN_SUCCESS, LOGOUT } = loginTypes;
const { ERROR } = alertTypes;

export const loginUser = (phone: string, password: string) => (
  dispatch: Dispatch<object>
) => {
  userService
    .login(phone, password)
    .then(
      token => dispatch({ type: LOGIN_SUCCESS, token }),
      (message: string) => dispatch({ type: ERROR, message })
    );
};

export const logoutUser = () => (dispatch: Dispatch<object>) => {
  userService.logout();
  dispatch({ type: LOGOUT });
};
