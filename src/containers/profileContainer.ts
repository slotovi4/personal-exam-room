import { connect } from 'react-redux';
import Profile from '../components/Profile/Profile';

export const ProfileContainer = connect((state: any) => ({
  profile: state.profile
}))(Profile);
