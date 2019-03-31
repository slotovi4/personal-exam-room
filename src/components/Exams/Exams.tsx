import * as React from 'react';

interface IProps {
  getUserExams: () => void;
}

class Exams extends React.Component<IProps> {
  public componentWillMount() {
    this.props.getUserExams();
  }

  public render() {
    return (
      <section>
        <span>расписание экзаменов</span>
      </section>
    );
  }
}

export default Exams;
