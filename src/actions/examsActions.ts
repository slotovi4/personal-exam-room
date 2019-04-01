import { examsTypes, alertTypes } from './types';
import { Dispatch } from 'react';
import { examsService } from '../services/examsService';

const { GET_EXAMS } = examsTypes;
const { ERROR } = alertTypes;

export const getUserExams = () => (dispatch: Dispatch<object>) => {
  examsService
    .getExams()
    .then(
      exams => dispatch({ type: GET_EXAMS, exams }),
      (message: string) => dispatch({ type: ERROR, message })
    );
};
