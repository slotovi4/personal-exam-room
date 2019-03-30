import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { USER } from './actions/types';

const initialState = localStorage[USER] ? JSON.parse(localStorage[USER]) : {};

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
  const stateUser = { ...state.login.user };
  const user = Object.keys(stateUser).length ? JSON.stringify(stateUser) : '';

  user ? localStorage.setItem(USER, user) : localStorage.removeItem(USER);
});

// store.subscribe(
//   () =>
//     (localStorage[USER_PROFILE] = profile
//       ? JSON.stringify(store.getState().profile)
//       : {})
// );

export default store;
