import * as React from 'react';
import { Redirect } from 'react-router-dom';

// components
import { MenuContainer } from '../../containers/menuContainer';

interface IProps {
  loggingIn: boolean;
}

export default (ComposedComponent: any) =>
  class UserIsAuthenticated extends React.Component<IProps> {
    public render() {
      return this.props.loggingIn ? (
        <React.Fragment>
          <MenuContainer />
          <ComposedComponent {...this.props} />
        </React.Fragment>
      ) : (
        <Redirect to={'/login'} />
      );
    }
  };
