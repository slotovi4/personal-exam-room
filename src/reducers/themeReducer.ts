import { themeTypes } from '../actions/types';
import { ITheme } from '../actions/interface';

export interface IAction {
  type?: 'SET_THEME';
  theme?: ITheme;
}

interface IState {
  theme: ITheme;
}

const { SET_THEME } = themeTypes;

export const initialState: IState = { theme: 'light' };

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.theme
      };
    default:
      return state;
  }
};
