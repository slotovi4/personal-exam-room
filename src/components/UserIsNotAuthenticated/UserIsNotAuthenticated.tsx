import * as React from 'react';
import { Redirect } from 'react-router-dom';

const store = localStorage['user-store']
  ? JSON.parse(localStorage['user-store'])
  : null;

const loggingIn = store.login.loggingIn;

export default (ComposedComponent: any) =>
  class UserIsNotAuthenticated extends React.Component {
    public render() {
      return !loggingIn ? (
        <ComposedComponent {...this.props} />
      ) : (
        <Redirect to={'/'} />
      );
    }
  };
