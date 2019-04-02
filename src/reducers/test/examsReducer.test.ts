import Exam, { IAction, initialState } from '../examsReducer';
import { IExams } from '../../actions/interface';
import * as deepFreeze from 'deep-freeze';

describe('Exams reducer', () => {
  it('GET_EXAMS sucess', () => {
    const state: IExams | {} = {};
    const exam = {
      id: 'f2762d48-5045-43a9-bf05-d8728771d820',
      date: '2019-04-02T16:50:00+00:00',
      qualificationTitle: 'Администрирование баз данных',
      qualificationLevel: '6',
      occupationalStandardTitle: 'occupation 1',
      examinationCenterName: 'Первый ЭЦ',
      address: 'ул. Петровка 38',
      city: 'Москва',
      status: 'isApplying',
      statusChangeTime: '0001-01-01T00:00:00+00:00',
      duration: 90
    };
    const action: IAction = {
      type: 'GET_EXAMS',
      exams: { exams: [exam], currentPage: 1, pageSize: 10, total: 11 }
    };

    deepFreeze([state, action]);
    const result = Exam(state, action);

    expect(result).toEqual({
      exams: [exam],
      currentPage: 1,
      pageSize: 10,
      total: 11
    });
  });

  it('Defaults array for incorrect action', () =>
    expect(Exam(initialState, {})).toEqual(initialState));
});
