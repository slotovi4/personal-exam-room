import { save } from '../actions/types';

const { USER_TOKEN } = save;

export const logout = () => {
  localStorage.removeItem(USER_TOKEN);
};
