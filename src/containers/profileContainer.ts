import { connect } from 'react-redux';
import { IGlobalState } from '../actions/interface';
import Profile from '../components/Profile/Profile';

export const ProfileContainer = connect((state: IGlobalState) => ({
  profile: state.profile
}))(Profile);
