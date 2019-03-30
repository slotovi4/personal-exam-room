import * as React from 'react';
import { Redirect } from 'react-router-dom';

interface IProps {
  loggingIn: boolean;
}

export default (ComposedComponent: any) =>
  class UserIsAuthenticated extends React.Component<IProps> {
    public render() {
      return this.props.loggingIn ? (
        <ComposedComponent {...this.props} />
      ) : (
        <Redirect to={'/login'} />
      );
    }
  };
