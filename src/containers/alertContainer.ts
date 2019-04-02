import { connect } from 'react-redux';
import { IGlobalState } from '../actions/interface';
import Alert from '../components/Alert/Alert';

export const AlertContainer = connect((state: IGlobalState) => ({
  alert: state.alert
}))(Alert);
