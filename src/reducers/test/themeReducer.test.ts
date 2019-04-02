import Theme, { IAction, initialState } from '../themeReducer';
import * as deepFreeze from 'deep-freeze';

describe('Theme reducer', () => {
  it('SET_THEME sucess', () => {
    const state = initialState;
    const action: IAction = { type: 'SET_THEME', theme: 'dark' };

    deepFreeze([state, action]);
    const result = Theme(state, action);

    expect(result).toEqual({
      theme: 'dark'
    });
  });

  it('Defaults array for incorrect action', () =>
    expect(Theme(initialState, {})).toEqual(initialState));
});
