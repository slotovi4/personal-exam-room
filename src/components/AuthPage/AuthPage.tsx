import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { ITheme } from '../../actions/interface';
import './AuthPage.scss';

// components
import { MenuContainer } from '../../containers/menuContainer';

interface IProps {
  loggingIn: boolean;
  theme: ITheme;
}

export default (ComposedComponent: any) =>
  class AuthPage extends React.Component<IProps> {
    public render() {
      const page = cn('AuthPage');
      const { theme } = this.props;

      return this.props.loggingIn ? (
        <section className={page({ theme })}>
          <MenuContainer />
          <ComposedComponent {...this.props} />
        </section>
      ) : (
        <Redirect to={'/login'} />
      );
    }
  };
