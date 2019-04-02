import { loginTypes } from '../actions/types';

interface IAction {
  type: 'LOGIN_SUCCESS' | 'LOGOUT';
  token?: string;
}

interface IState {
  loggingIn: boolean;
  token: string;
}

const { LOGIN_SUCCESS, LOGOUT } = loginTypes;

const initialState: IState = { loggingIn: false, token: '' };

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
