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
    const { theme } = this.props;
    const th = cn('Theme');

    return (
      <section className={th()}>
        <span className={th('Title')}>Выбор темы</span>
        <div
          className={th('Color', { type: 'dark', current: theme === 'dark' })}
          onClick={() => this.setColor('dark')}
        />
        <div
          className={th('Color', { type: 'light', current: theme === 'light' })}
          onClick={() => this.setColor('light')}
        />
      </section>
    );
  }

  private setColor = (color: ITheme) => {
    const body = document.querySelector('body');

    if (body) {
      body.className = `${color}-theme`;
    }

    this.props.setThemeStyle(color);
  };
}

export default Theme;
