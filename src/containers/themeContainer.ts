import { connect } from 'react-redux';
import { setThemeStyle } from '../actions/themeActions';
import Theme from '../components/Theme/Theme';

export const ThemeContainer = connect(
  (state: any) => ({
    theme: state.theme.theme
  }),
  { setThemeStyle }
)(Theme);
