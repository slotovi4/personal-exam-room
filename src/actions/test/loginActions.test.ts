import store from '../../store';
import { logoutUser } from '../loginActions';

describe('Login actions', () => {
  it('logoutUser', () => {
    const res = logoutUser();
    res(store.dispatch);

    expect(store.getState().login).toEqual({ loggingIn: false, token: '' });
  });
});
