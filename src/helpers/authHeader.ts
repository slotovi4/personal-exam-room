import { save } from '../actions/types';

const { USER_TOKEN } = save;

export function authHeader() {
  const token = localStorage[USER_TOKEN];

  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}
