import { connect } from 'react-redux';
import { getUserExams } from '../actions/examsActions';
import { IGlobalState } from '../actions/interface';
import Exams from '../components/Exams/Exams';

export const ExamsContainer = connect(
  (state: IGlobalState) => ({
    exams: state.exams.exams
  }),
  { getUserExams }
)(Exams);
