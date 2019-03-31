import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import './AuthPage.scss';

// components
import { MenuContainer } from '../../containers/menuContainer';

interface IProps {
  loggingIn: boolean;
}

export default (ComposedComponent: any) =>
  class AuthPage extends React.Component<IProps> {
    public render() {
      const page = cn('AuthPage');

      return this.props.loggingIn ? (
        <div className={page()}>
          <MenuContainer />
          <ComposedComponent {...this.props} />
        </div>
      ) : (
        <Redirect to={'/login'} />
      );
    }
  };
