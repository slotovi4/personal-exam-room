import store, { initialState } from './store';
import { save, loginTypes, themeTypes } from './actions/types';

const { USER_TOKEN, THEME_STYLE } = save;
const { LOGIN_SUCCESS } = loginTypes;
const { SET_THEME } = themeTypes;
const globalAny: any = global;

describe('Store state', () => {
  it('Defaults login state for incorrect action', () => {
    const state = store.getState();
    const login = state.login;

    expect(login).toEqual(initialState.login);
  });

  it('Defaults theme state for incorrect action', () => {
    const state = store.getState();
    const theme = state.theme;

    expect(theme).toEqual(initialState.theme);
  });
});

describe('Store save', () => {
  beforeEach(() => {
    globalAny.localStorage[USER_TOKEN] = '';
    globalAny.localStorage[THEME_STYLE] = 'light';

    store.dispatch({
      type: LOGIN_SUCCESS,
      token: 'dnjjnkasdwqwdn2n'
    });

    store.dispatch({
      type: SET_THEME,
      theme: 'dark'
    });
  });

  it('Saving USER_TOKEN', () => {
    expect(globalAny.localStorage[USER_TOKEN]).toEqual('dnjjnkasdwqwdn2n');
  });

  it('Saving THEME_STYLE', () => {
    expect(globalAny.localStorage[THEME_STYLE]).toEqual('dark');
  });
});
