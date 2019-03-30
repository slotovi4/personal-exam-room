import { USER_TOKEN } from '../actions/types';

export const logout = () => {
  console.log('logout');
  localStorage.removeItem(USER_TOKEN);
};
