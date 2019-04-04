import * as React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { Navbar, Button } from 'react-bootstrap';
import { ITheme } from '../../actions/interface';
import './Menu.scss';

export interface IProps {
  firstName: string;
  lastName: string;
  location: Location;
  theme: ITheme;
  getUserProfile: () => void;
  logoutUser: () => void;
}

class Menu extends React.Component<IProps> {
  public componentWillMount() {
    const { lastName, firstName, getUserProfile } = this.props;

    if (!lastName && !firstName) {
      getUserProfile();
    }
  }

  public render() {
    const { firstName, lastName, location, logoutUser, theme } = this.props;
    const menu = cn('Menu');

    return (
      <section className={menu()}>
        <Navbar bg={theme} variant={theme} className={menu('Nav')}>
          <Navbar.Brand className={menu('Title', { theme })}>
            {firstName} {lastName}
          </Navbar.Brand>
          <Link
            to="/"
            className={menu('Link', {
              theme,
              active: location.pathname === '/'
            })}
          >
            Главная
          </Link>
          <Link
            to="/profile"
            className={menu('Link', {
              theme,
              active: location.pathname === '/profile'
            })}
          >
            Профиль
          </Link>
          <Link
            to="/exams"
            className={menu('Link', {
              theme,
              active: location.pathname === '/exams'
            })}
          >
            Расписание экзаменов
          </Link>
          <Button type="button" onClick={logoutUser}>
            Выйти
          </Button>
        </Navbar>
      </section>
    );
  }
}

export default Menu;
