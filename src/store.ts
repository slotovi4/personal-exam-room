import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { USER_TOKEN, THEME_STYLE } from './actions/types';

const stateToken = localStorage[USER_TOKEN];
const stateTheme = localStorage[THEME_STYLE];

const initialState = {
  login: {
    loggingIn: stateToken ? true : false,
    token: stateToken || ''
  },
  theme: {
    theme: stateTheme || 'light'
  }
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  const state = store.getState();
  const token = state.login.token;
  const theme = state.theme.theme;

  token
    ? localStorage.setItem(USER_TOKEN, token)
    : localStorage.removeItem(USER_TOKEN);

  theme
    ? localStorage.setItem(THEME_STYLE, theme)
    : localStorage.setItem(THEME_STYLE, 'light');
});
export default store;
