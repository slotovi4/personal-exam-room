import { connect } from 'react-redux';
import Alert from '../components/Alert/Alert';

export const AlertContainer = connect((state: any) => ({
  alert: state.alert
}))(Alert);
