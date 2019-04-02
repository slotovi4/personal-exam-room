import { connect } from 'react-redux';
import { getUserProfile } from '../actions/profileActions';
import { logoutUser } from '../actions/loginActions';
import { withRouter } from 'react-router';
import { IGlobalState } from '../actions/interface';
import { compose } from 'redux';
import Menu from '../components/Menu/Menu';

export const MenuContainer = compose(
  withRouter,
  connect(
    (state: IGlobalState) => ({
      firstName: state.profile.firstName,
      lastName: state.profile.lastName,
      theme: state.theme.theme
    }),
    { getUserProfile, logoutUser }
  )
)(Menu);
