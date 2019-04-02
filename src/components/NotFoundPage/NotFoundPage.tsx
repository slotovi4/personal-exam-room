import * as React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import './NotFoundPage.scss';

const NotFoundPage = () => {
  const notFound = cn('NotFoundPage');

  return (
    <section className={notFound()}>
      <span className={notFound('Title')}>
        Page not found! Go <Link to="/"> Home</Link>{' '}
      </span>
    </section>
  );
};

export default NotFoundPage;
