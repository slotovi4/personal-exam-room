import * as React from 'react';
import { ITheme } from '../../actions/interface';
import { cn } from '@bem-react/classname';
import './Theme.scss';

export interface IProps {
  theme: ITheme;
  setThemeStyle: (theme: ITheme) => void;
}

class Theme extends React.Component<IProps> {
  public render() {
    const { theme, setThemeStyle } = this.props;
    const th = cn('Theme');

    return (
      <section className={th()}>
        <span className={th('Title')}>Выбор темы</span>
        <div
          className={th('Color', { type: 'dark', current: theme === 'dark' })}
          onClick={() => setThemeStyle('dark')}
        />
        <div
          className={th('Color', { type: 'light', current: theme === 'light' })}
          onClick={() => setThemeStyle('light')}
        />
      </section>
    );
  }
}

export default Theme;
