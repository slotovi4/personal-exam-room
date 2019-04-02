import Alert, { IAction, initialState } from '../alertReducer';
import * as deepFreeze from 'deep-freeze';

describe('Alert reducer', () => {
  it('ALERT sucess', () => {
    const state = initialState;
    const action: IAction = { type: 'ALERT', message: 'привет сообщение' };

    deepFreeze([state, action]);
    const result = Alert(state, action);

    expect(result).toEqual({
      message: 'привет сообщение',
      messageType: 'alert'
    });
  });

  it('ERROR sucess', () => {
    const state = initialState;
    const action: IAction = { type: 'ERROR', message: 'ошибка' };

    deepFreeze([state, action]);
    const result = Alert(state, action);

    expect(result).toEqual({
      message: 'ошибка',
      messageType: 'error'
    });
  });

  it('Defaults array for incorrect action', () =>
    expect(Alert(initialState, {})).toEqual(initialState));
});
