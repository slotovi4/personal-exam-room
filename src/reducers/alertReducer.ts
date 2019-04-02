import { alertTypes } from '../actions/types';
import { IAlert } from '../actions/interface';

export interface IAction {
  type?: 'ALERT' | 'ERROR';
  message?: string;
}

export const initialState: IAlert = { message: '', messageType: '' };

const { ALERT, ERROR } = alertTypes;

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case ALERT:
      return {
        ...state,
        message: action.message,
        messageType: 'alert'
      };
    case ERROR:
      return {
        ...state,
        message: action.message,
        messageType: 'error'
      };
    default:
      return state;
  }
};
