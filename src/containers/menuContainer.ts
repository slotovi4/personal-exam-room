import { connect } from 'react-redux';
import { getUserProfile } from '../actions/profileActions';
import { logoutUser } from '../actions/loginActions';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import Menu from '../components/Menu/Menu';

export const MenuContainer = compose(
  withRouter,
  connect(
    (state: any) => ({
      firstName: state.profile.firstName,
      lastName: state.profile.lastName
    }),
    { getUserProfile, logoutUser }
  )
)(Menu);
