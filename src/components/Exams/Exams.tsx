import * as React from 'react';
import { IExam } from '../../actions/interface';

interface IProps {
  exams: IExam[];
  getUserExams: () => void;
}

class Exams extends React.Component<IProps> {
  public componentWillMount() {
    const { exams } = this.props;

    if (!exams) {
      this.props.getUserExams();
    }
  }

  public render() {
    const { exams } = this.props;

    return (
      <section>
        <span>расписание экзаменов</span>
        <table>
          <thead>
            <tr>
              <th>дата и время</th>
              <th>квалификация</th>
              <th>уровень</th>
              <th>город</th>
              <th>статус</th>
            </tr>
          </thead>
          <tbody>
            {exams &&
              exams.map(
                (
                  {
                    qualificationTitle,
                    qualificationLevel,
                    date,
                    address,
                    city,
                    status
                  },
                  i
                ) => (
                  <tr key={`exam_${i}`}>
                    <th>{date}</th>
                    <th>
                      {qualificationTitle} {address}
                    </th>
                    <th>{qualificationLevel}</th>
                    <th>{city}</th>
                    <th>{status}</th>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </section>
    );
  }
}

export default Exams;
