import { connect } from 'react-redux';
import Menu from '../components/Menu/Menu';

export const MenuContainer = connect((state: any) => ({
  firstName: state.profile.firstName,
  lastName: state.profile.lastName
}))(Menu);
