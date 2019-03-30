import { loginTypes, USER } from '../actions/types';
import { IUser } from '../actions/interface';

interface IAction {
  type: 'LOGIN_SUCCESS' | 'LOGIN_FAILURE' | 'LOGOUT';
  user?: IUser;
}

interface IState {
  loggingIn: boolean;
  user: IUser | {};
}

const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = loginTypes;

const user = localStorage[USER] ? JSON.parse(localStorage[USER]) : undefined;

const initialState: IState = user
  ? { loggingIn: true, user }
  : { loggingIn: false, user: {} };

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: true,
        user: action.user
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        user: {}
      };
    case LOGOUT:
      return {
        ...state,
        loggingIn: false,
        user: {}
      };
    default:
      return state;
  }
};
