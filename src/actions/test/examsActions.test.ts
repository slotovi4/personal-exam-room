import store from '../../store';
import { getUserExams } from '../examsActions';

describe('Exams actions', () => {
  describe('getUserExams', () => {
    it('should work get exams', () => {
      const res = getUserExams();
      res(store.dispatch);

      expect(store.getState().exams).toEqual({});
    });
  });
});
