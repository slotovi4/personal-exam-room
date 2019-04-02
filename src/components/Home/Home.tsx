import * as React from 'react';
import { ThemeContainer } from '../../containers/themeContainer';
import { cn } from '@bem-react/classname';
import './Home.scss';

const Home = () => {
  const home = cn('Home');

  return (
    <section className={home()}>
      <h1 className={home('Title')}>Главная страница</h1>
      <ThemeContainer />
    </section>
  );
};

export default Home;
