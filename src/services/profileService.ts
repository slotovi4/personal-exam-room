import { API_URL } from '../actions/types';
import axios from 'axios';
import { logout } from '../helpers/logout';
import { authHeader } from '../helpers/authHeader';
import { IProfile } from '../actions/interface';

const getProfile = async () => {
  const axiosInstance = axios.create({
    validateStatus: status => {
      return status >= 200 && status <= 503;
    }
  });

  const response = await axiosInstance.get(`${API_URL}/v1/account/profile`, {
    headers: authHeader()
  });

  const resStatus = response.status;

  if (resStatus === 200) {
    const profile: IProfile = response.data;

    return profile;
  } else if (resStatus === 401) {
    logout();
    location.reload(true);
    return Promise.reject('Unauthorized');
  } else if (resStatus === 403) {
    return Promise.reject('Forbidden');
  } else if (resStatus === 500) {
    return Promise.reject('Внутренняя ошибка сервера.');
  }

  return Promise.reject(response.statusText);
};

export const profileService = {
  getProfile
};
