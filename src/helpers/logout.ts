import { USER_TOKEN, USER_PROFILE } from '../actions/types';

export const logout = () => {
  console.log('logout');
  localStorage.removeItem(USER_TOKEN);
  localStorage.removeItem(USER_PROFILE);
};
