import store from '../../store';
import { alertMessage, alertError } from '../alertActions';

describe('Alert actions', () => {
  describe('alertMessage', () => {
    it('should add alert message', () => {
      const res = alertMessage('alert mess');
      res(store.dispatch);

      expect(store.getState().alert).toEqual({
        message: 'alert mess',
        messageType: 'alert'
      });
    });
  });

  describe('alertError', () => {
    it('should add error message', () => {
      const res = alertError('error mess');
      res(store.dispatch);

      expect(store.getState().alert).toEqual({
        message: 'error mess',
        messageType: 'error'
      });
    });
  });
});
