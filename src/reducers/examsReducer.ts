import { examsTypes } from '../actions/types';
import { IExams } from '../actions/interface';

interface IAction {
  type: 'GET_EXAMS';
  exams?: IExams;
}

interface IState {
  exams: IExams;
}

const { GET_EXAMS } = examsTypes;

const initialState: IState | {} = {};

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
