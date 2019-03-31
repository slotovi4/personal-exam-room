import { examsTypes } from './types';
import { Dispatch } from 'react';
import { examsService } from '../services/examsService';

const { GET_EXAMS, GET_EXAMS_FAILURE } = examsTypes;

export const getUserExams = () => (dispatch: Dispatch<object>) => {
  examsService
    .getExams()
    .then(
      exams => dispatch({ type: GET_EXAMS, exams }),
      (error: string) => dispatch({ type: GET_EXAMS_FAILURE, error })
    );
};
