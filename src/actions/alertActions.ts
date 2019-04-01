import { alertTypes } from './types';
import { Dispatch } from 'react';

const { ALERT, ERROR } = alertTypes;

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
