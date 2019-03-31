import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import './NotAuthPage.scss';

interface IProps {
  loggingIn: boolean;
}

export default (ComposedComponent: any) =>
  class NotAuthPage extends React.Component<IProps> {
    public render() {
      const page = cn('NotAuthPage');

      return !this.props.loggingIn ? (
        <div className={page()}>
          <ComposedComponent {...this.props} />
        </div>
      ) : (
        <Redirect to={'/'} />
      );
    }
  };
