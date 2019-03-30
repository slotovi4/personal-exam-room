import { API_URL } from '../actions/types';
import axios, { AxiosResponse } from 'axios';
// import { logout } from '../helpers/logout';
import { USER_PROFILE } from '../actions/types';
import { authHeader } from '../helpers/authHeader';

const getProfile = () =>
  axios
    .get(`${API_URL}/v1/account/profile`, { headers: authHeader() })
    .then(handleResponse)
    .then((profile: any) => {
      localStorage.setItem(USER_PROFILE, JSON.stringify(profile));
      console.log(profile);
      return profile;
    });

const handleResponse = (response: AxiosResponse) => {
  if (response.statusText !== 'OK') {
    // if (response.status === 401) {
    //   logout();
    // }

    return response.statusText;
  }

  return response.data;
};

export const profileService = {
  getProfile
};
