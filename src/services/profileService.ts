import { API_URL } from '../actions/types';
import axios, { AxiosResponse } from 'axios';
import { logout } from '../helpers/logout';
import { authHeader } from '../helpers/authHeader';
import { IUser } from '../actions/interface';

const getProfile = () =>
  axios
    .get(`${API_URL}/v1/account/profile`, { headers: authHeader() })
    .then(handleResponse)
    .then((profile: IUser) => profile);

const handleResponse = (response: AxiosResponse) => {
  if (response.statusText !== 'OK') {
    if (response.status === 401) {
      logout();
    }

    return response.statusText;
  }

  return response.data;
};

export const profileService = {
  getProfile
};
