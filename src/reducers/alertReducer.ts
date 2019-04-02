import { alertTypes } from '../actions/types';
import { IAlert } from '../actions/interface';

interface IAction {
  type: 'ALERT' | 'ERROR';
  message?: string;
}

const { ALERT, ERROR } = alertTypes;

const initialState: IAlert = { message: '', messageType: '' };

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
