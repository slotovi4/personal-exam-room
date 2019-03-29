import { loginTypes } from './types';
import { Dispatch } from 'react';
import { userService } from '../services/userService';

const { LOGIN_SUCCESS, LOGIN_FAILURE } = loginTypes;

export const loginUser = (phone: string, password: string) => (
  dispatch: Dispatch<object>
) => {
  userService
    .login(phone, password)
    .then(
      user => dispatch({ type: LOGIN_SUCCESS, user }),
      (error: string) => dispatch({ type: LOGIN_FAILURE, error })
    );
};
