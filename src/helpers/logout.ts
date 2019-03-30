import { USER, USER_PROFILE } from '../actions/types';

export const logout = () => {
  console.log('logout');
  localStorage.removeItem(USER);
  localStorage.removeItem(USER_PROFILE);
};
