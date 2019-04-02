import * as React from 'react';
import { ITheme } from '../../actions/interface';
import { cn } from '@bem-react/classname';
import './Theme.scss';

interface IProps {
  theme: ITheme;
  setThemeStyle: (theme: ITheme) => void;
}

class Theme extends React.Component<IProps> {
  public render() {
    const th = cn('Theme');
    const { setThemeStyle } = this.props;

    return (
      <section className={th()}>
        <span className={th('Title')}>Выбор темы</span>
        <div
          className={th('Color', { type: 'dark' })}
          onClick={() => setThemeStyle('dark')}
        />
        <div
          className={th('Color', { type: 'light' })}
          onClick={() => setThemeStyle('light')}
        />
      </section>
    );
  }
}

export default Theme;
