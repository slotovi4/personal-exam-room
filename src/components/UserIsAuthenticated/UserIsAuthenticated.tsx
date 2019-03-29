import * as React from 'react';
import { Redirect } from 'react-router-dom';

const store = localStorage['user-store']
  ? JSON.parse(localStorage['user-store'])
  : null;

const loggingIn = store.login.loggingIn;

export default (ComposedComponent: any) =>
  class UserIsAuthenticated extends React.Component {
    public render() {
      console.log(loggingIn);
      return loggingIn ? (
        <ComposedComponent {...this.props} />
      ) : (
        <Redirect to={'/login'} />
      );
    }
  };
