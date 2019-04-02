import Login, { IAction, initialState } from '../loginReducer';
import * as deepFreeze from 'deep-freeze';

describe('Login reducer', () => {
  it('LOGIN_SUCCESS sucess', () => {
    const state = initialState;
    const action: IAction = {
      type: 'LOGIN_SUCCESS',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlx'
    };

    deepFreeze([state, action]);
    const result = Login(state, action);

    expect(result).toEqual({
      loggingIn: true,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlx'
    });
  });

  it('LOGOUT sucess', () => {
    const state = initialState;
    const action: IAction = {
      type: 'LOGOUT'
    };

    deepFreeze([state, action]);
    const result = Login(state, action);

    expect(result).toEqual({
      loggingIn: false,
      token: ''
    });
  });

  it('Defaults array for incorrect action', () =>
    expect(Login(initialState, {})).toEqual(initialState));
});
