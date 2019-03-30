import { USER_TOKEN } from '../actions/types';

export function authHeader() {
  const token = localStorage[USER_TOKEN];

  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}
