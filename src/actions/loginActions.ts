import { loginTypes, API_URL } from './types';
import { Dispatch } from 'react';
import axios from 'axios';

const { LOGIN } = loginTypes;

export const loginUser = (phone: string, password: string) => (
  dispatch: Dispatch<object>
) => {
  axios
    .post(`${API_URL}/v1/account/login`, { phone, password })
    .then(
      response => console.log(response),
      error => console.log('An error occurred.', error)
    )
    .then(user => dispatch({ type: LOGIN, user }));
};
