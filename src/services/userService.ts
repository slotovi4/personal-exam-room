import axios from 'axios';
import { API_URL } from '../actions/types';
import { IUser } from '../actions/interface';
import { logout } from '../helpers/logout';

const login = async (phone: string, password: string) => {
  const axiosInstance = axios.create({
    validateStatus: status => {
      return status >= 200 && status <= 503;
    }
  });

  const response = await axiosInstance.post(`${API_URL}/v1/account/login`, {
    phone,
    password
  });

  const resStatus = response.status;

  if (resStatus === 200) {
    const user: IUser = response.data;
    const { token } = user;

    return token;
  } else if (resStatus === 400) {
    return Promise.reject('Указан неверный формат данных.');
  } else if (resStatus === 401) {
    logout();
    return Promise.reject('Указан неверный логин /пароль.');
  } else if (resStatus === 500) {
    return Promise.reject('Внутренняя ошибка сервера.');
  }

  return Promise.reject(response.statusText);
};

export const userService = {
  login,
  logout
};
