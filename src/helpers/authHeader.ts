import { USER } from '../actions/types';

export function authHeader() {
  const user = localStorage[USER] ? JSON.parse(localStorage[USER]) : null;

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
}
