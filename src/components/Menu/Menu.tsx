import * as React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { Navbar } from 'react-bootstrap';
import './Menu.scss';

interface IProps {
  firstName: string;
  lastName: string;
  location: Location;
  getUserProfile: () => void;
  logoutUser: () => void;
}

class Menu extends React.Component<IProps> {
  public componentWillMount() {
    const { lastName, firstName } = this.props;

    if (!lastName && !firstName) {
      this.props.getUserProfile();
    }
  }

  public render() {
    const { firstName, lastName, location, logoutUser } = this.props;
    const menu = cn('Menu');

    return (
      <section className={menu()}>
        <Navbar bg="dark" variant="dark" className={menu('Nav')}>
          <h5 className={menu('Title')}>
            {firstName} {lastName}
          </h5>
          <Link
            to="/"
            className={menu('Link', { active: location.pathname === '/' })}
          >
            Главная
          </Link>
          <Link
            to="/profile"
            className={menu('Link', {
              active: location.pathname === '/profile'
            })}
          >
            Профиль
          </Link>
          <Link
            to="/exams"
            className={menu('Link', { active: location.pathname === '/exams' })}
          >
            Расписание экзаменов
          </Link>
          <button onClick={logoutUser}>Выйти</button>
        </Navbar>
      </section>
    );
  }
}

export default Menu;
