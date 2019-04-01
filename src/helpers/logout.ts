import { USER_TOKEN } from '../actions/types';

export const logout = () => {
  localStorage.removeItem(USER_TOKEN);
};
