import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  firstName: string;
  lastName: string;
  getUserProfile: () => void;
}

class Menu extends React.Component<IProps> {
  public componentWillMount() {
    const { lastName, firstName } = this.props;

    if (!lastName && !firstName) {
      this.props.getUserProfile();
    }
  }

  public render() {
    const { firstName, lastName } = this.props;

    return (
      <section>
        <h5>
          {firstName} {lastName}
        </h5>
        <Link to="/profile">профилль</Link>
        <Link to="/exams">расписание экзаменов</Link>
      </section>
    );
  }
}

export default Menu;
