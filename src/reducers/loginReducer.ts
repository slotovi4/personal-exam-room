import { loginTypes } from '../actions/types';

const { LOGIN } = loginTypes;

const initialState = {
  test: true
};

export interface IAction {
  type: 'LOGIN';
}

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case LOGIN:
      return state;
    default:
      return state;
  }
};
