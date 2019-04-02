import { connect } from 'react-redux';
import { setThemeStyle } from '../actions/themeActions';
import { IGlobalState } from '../actions/interface';
import Theme from '../components/Theme/Theme';

export const ThemeContainer = connect(
  (state: IGlobalState) => ({
    theme: state.theme.theme
  }),
  { setThemeStyle }
)(Theme);
