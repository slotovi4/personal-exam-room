import { USER_TOKEN } from '../actions/types';

export function authHeader() {
  const user = localStorage[USER_TOKEN]
    ? JSON.parse(localStorage[USER_TOKEN])
    : null;

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
}
