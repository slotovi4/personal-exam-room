import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { logoutUser } from '../actions/loginActions';
import Home from '../components/Home/Home';

export const HomeContainer = compose(
  withRouter,
  connect(
    null,
    { logoutUser }
  )
)(Home);
