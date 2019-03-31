import { connect } from 'react-redux';
import { getUserProfile } from '../actions/profileActions';
import Profile from '../components/Profile/Profile';

export const ProfileContainer = connect(
  (state: any) => ({
    profile: state.profile
  }),
  { getUserProfile }
)(Profile);
