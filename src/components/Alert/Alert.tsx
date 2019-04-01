import * as React from 'react';
import { IAlert } from '../../actions/interface';
import { cn } from '@bem-react/classname';
import './Alert.scss';

interface IProps {
  alert: IAlert;
}

interface IState {
  show: boolean;
}

class Alert extends React.Component<IProps, IState> {
  public state = {
    show: false
  };

  public componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.alert.messageType !== '') {
      this.setState({ show: true });
    }
  }

  public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    const { message } = nextProps.alert;
    const { show } = nextState;

    if (message !== this.props.alert.message || show !== this.state.show) {
      return true;
    }

    return false;
  }

  public render() {
    const { show } = this.state;
    const { message, messageType } = this.props.alert;
    const alert = cn('Alert');

    return show ? (
      <article
        className={alert({ type: messageType })}
        onClick={() => this.setState({ show: false })}
      >
        <span className={alert('Message')}>{message}</span>
      </article>
    ) : null;
  }
}

export default Alert;
