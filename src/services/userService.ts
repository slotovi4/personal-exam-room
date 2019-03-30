import { API_URL } from '../actions/types';
import { IUser } from '../actions/interface';
import axios, { AxiosResponse } from 'axios';
import { USER_TOKEN } from '../actions/types';
import { logout } from '../helpers/logout';

const login = (phone: string, password: string) =>
  axios
    .post(`${API_URL}/v1/account/login`, { phone, password })
    .then(handleResponse)
    .then((user: IUser) => {
      const token = user.token;
      localStorage.setItem(USER_TOKEN, token);

      return token;
    });

const handleResponse = (response: AxiosResponse) => {
  if (response.statusText !== 'OK') {
    if (response.status === 401) {
      logout();
    }

    return response.statusText;
  }

  return response.data;
};

export const userService = {
  login,
  logout
};
