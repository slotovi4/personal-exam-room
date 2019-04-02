import { loginTypes } from '../actions/types';
import { ILogin } from '../actions/interface';

export interface IAction {
  type?: 'LOGIN_SUCCESS' | 'LOGOUT';
  token?: string;
}

const { LOGIN_SUCCESS, LOGOUT } = loginTypes;

export const initialState: ILogin = { loggingIn: false, token: '' };

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: true,
        token: action.token
      };
    case LOGOUT:
      return {
        ...state,
        loggingIn: false,
        token: ''
      };
    default:
      return state;
  }
};
