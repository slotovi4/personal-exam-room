import * as React from 'react';

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
      <span>профилль</span>
      <span>расписание экзаменов</span>
    </section>
  );
};

export default Menu;
