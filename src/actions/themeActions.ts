import { themeTypes } from './types';
import { ITheme } from '../actions/interface';
import { Dispatch } from 'react';

const { SET_THEME } = themeTypes;

export const setThemeStyle = (theme: ITheme) => (
  dispatch: Dispatch<object>
) => {
  dispatch({ type: SET_THEME, theme });
};
