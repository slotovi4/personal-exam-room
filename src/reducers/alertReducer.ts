import { alertTypes } from '../actions/types';

interface IAction {
  type: 'ALERT' | 'ERROR';
  message?: string;
}

interface IState {
  message: string;
  messageType: 'error' | 'alert' | '';
}

const { ALERT, ERROR } = alertTypes;

const initialState: IState = { message: '', messageType: '' };

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
