import { API_URL } from '../actions/types';
import { IUser } from '../actions/interface';
import axios, { AxiosResponse } from 'axios';

const login = (phone: string, password: string) =>
  axios
    .post(`${API_URL}/v1/account/login`, { phone, password })
    .then(handleResponse)
    .then((user: IUser) => {
      localStorage.setItem('user-store', JSON.stringify(user));

      return user;
    });

const logout = () => localStorage.removeItem('user-store');

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
