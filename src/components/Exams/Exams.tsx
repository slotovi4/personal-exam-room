import * as React from 'react';
import { IExam } from '../../actions/interface';
import { Table } from 'react-bootstrap';
import { cn } from '@bem-react/classname';
import { getConvertedDate } from '../../helpers/getConvertedDate';
import './Exams.scss';

export interface IProps {
  exams: IExam[];
  getUserExams: () => void;
}

class Exams extends React.Component<IProps> {
  public componentWillMount() {
    const { exams, getUserExams } = this.props;

    if (!exams) {
      getUserExams();
    }
  }

  public render() {
    const { exams } = this.props;
    const ex = cn('Exams');

    return (
      <section className={ex()}>
        <header className={ex('Header')}>
          <h3 className={ex('Title')}>Расписание экзаменов</h3>
          <h6 className={ex('Title', { pre: true })}>
            Список всех экзаменов открытых для записи, а также тех, на которые
            вы записаны
          </h6>
        </header>

        <Table striped={true} bordered={true} hover={true}>
          <thead>
            <tr>
              <th>Дата и время</th>
              <th>Квалификация</th>
              <th>Уровень</th>
              <th>Город</th>
              <th>Статус</th>
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
                    <th>{getConvertedDate(date)}</th>
                    <th>
                      <h5>{qualificationTitle}</h5>
                      <span>{address}</span>
                    </th>
                    <th>{qualificationLevel}</th>
                    <th>{city}</th>
                    <th>{status}</th>
                  </tr>
                )
              )}
          </tbody>
        </Table>
      </section>
    );
  }
}

export default Exams;
