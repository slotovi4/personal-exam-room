import { connect } from 'react-redux';
import { getUserExams } from '../actions/examsActions';
import Exams from '../components/Exams/Exams';

export const ExamsContainer = connect(
  null,
  { getUserExams }
)(Exams);
