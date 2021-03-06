import { examsTypes } from '../actions/types';
import { IExams } from '../actions/interface';

export interface IAction {
  type?: 'GET_EXAMS';
  exams?: IExams;
}

const { GET_EXAMS } = examsTypes;

export const initialState: IExams | {} = {};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case GET_EXAMS:
      return {
        ...state,
        ...action.exams
      };
    default:
      return state;
  }
};
