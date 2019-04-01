import * as React from 'react';
import { IAlert } from '../../actions/interface';
import { cn } from '@bem-react/classname';
import './Alert.scss';

interface IProps {
  alert: IAlert;
  alertClear: () => void;
}

class Alert extends React.Component<IProps> {
  public componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.alert.messageType === '') {
      this.props.alertClear();
    }
  }

  public shouldComponentUpdate(nextProps: IProps) {
    if (nextProps.alert.message !== '') {
      return true;
    }

    return false;
  }

  public render() {
    const { message, messageType } = this.props.alert;
    const alert = cn('Alert');

    return (
      <article
        className={alert({ type: messageType })}
        onClick={this.props.alertClear}
      >
        <span className={alert('Message')}>{message}</span>
      </article>
    );
  }
}

export default Alert;
