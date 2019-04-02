import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { ConnectedComponentClass } from 'react-redux';
import './NotAuthPage.scss';

interface IProps {
  loggingIn: boolean;
}

export default (
  ComposedComponent:
    | ConnectedComponentClass<any, any>
    | React.ClassicComponentClass
    | React.FunctionComponent
) =>
  class NotAuthPage extends React.Component<IProps> {
    public render() {
      const page = cn('NotAuthPage');

      return !this.props.loggingIn ? (
        <section className={page()}>
          <ComposedComponent {...this.props} />
        </section>
      ) : (
        <Redirect to={'/'} />
      );
    }
  };
