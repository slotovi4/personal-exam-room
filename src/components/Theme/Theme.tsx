import * as React from 'react';
import { ITheme } from '../../actions/interface';

interface IProps {
  theme: ITheme;
  setThemeStyle: (theme: ITheme) => void;
}

class Theme extends React.Component<IProps> {
  public render() {
    return (
      <section>
        <span>Выбор темы</span>
      </section>
    );
  }
}

export default Theme;
