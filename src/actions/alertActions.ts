import { alertTypes } from './types';
import { Dispatch } from 'react';

const { ALERT, ERROR, CLEAR } = alertTypes;

export const alertMessage = (message: string) => (
  dispatch: Dispatch<object>
) => {
  dispatch({
    type: ALERT,
    message
  });
};

export const alertError = (message: string) => (dispatch: Dispatch<object>) => {
  dispatch({
    type: ERROR,
    message
  });
};

export const alertClear = () => (dispatch: Dispatch<object>) => {
  dispatch({
    type: CLEAR
  });
};
