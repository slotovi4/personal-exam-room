import { examsTypes } from '../actions/types';

interface IAction {
  type: 'GET_EXAMS' | 'GET_EXAMS_FAILURE';
  exams?: any;
}

const { GET_EXAMS } = examsTypes;

const initialState: any | {} = {};

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
