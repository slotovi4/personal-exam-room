import { connect } from 'react-redux';
import { alertClear } from '../actions/alertActions';
import Alert from '../components/Alert/Alert';

export const AlertContainer = connect(
  (state: any) => ({
    alert: state.alert
  }),
  { alertClear }
)(Alert);
