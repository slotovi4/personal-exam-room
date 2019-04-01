import * as React from 'react';
import { IAlert } from '../../actions/interface';
import { cn } from '@bem-react/classname';
import './Alert.scss';

interface IProps {
  alert: IAlert;
}

class Alert extends React.Component<IProps> {
  public state = {
    show: false
  };

  public componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.alert.messageType !== '') {
      this.setState({ show: true });
    }
  }

  public shouldComponentUpdate(nextProps: IProps) {
    if (nextProps.alert.message !== this.props.alert.message) {
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
