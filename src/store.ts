import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { USER_TOKEN } from './actions/types';

const stateToken = localStorage[USER_TOKEN];

const initialState = {
  login: {
    loggingIn: stateToken ? true : false,
    token: stateToken || ''
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

  token
    ? localStorage.setItem(USER_TOKEN, token)
    : localStorage.removeItem(USER_TOKEN);
});

// store.subscribe(
//   () =>
//     (localStorage[USER_PROFILE] = profile
//       ? JSON.stringify(store.getState().profile)
//       : {})
// );

export default store;
