import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  firstName: string;
  lastName: string;
}

const Menu = ({ firstName, lastName }: IProps) => {
  return (
    <section>
      <h5>
        {firstName} {lastName}
      </h5>
      <Link to="/profile">профилль</Link>
      <Link to="/exams">расписание экзаменов</Link>
    </section>
  );
};

export default Menu;
