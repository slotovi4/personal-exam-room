import { loginTypes, USER_TOKEN } from '../actions/types';

interface IAction {
  type: 'LOGIN_SUCCESS' | 'LOGIN_FAILURE' | 'LOGOUT';
  token?: string;
}

interface IState {
  loggingIn: boolean;
  token: string;
}

const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = loginTypes;

const token: string = localStorage[USER_TOKEN];

const initialState: IState = token
  ? { loggingIn: true, token }
  : { loggingIn: false, token: '' };

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: true,
        token: action.token
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        token: ''
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
