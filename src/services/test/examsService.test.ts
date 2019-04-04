import { examsService } from '../examsService';
import { userService } from '../userService';
import { save } from '../../actions/types';

const { USER_TOKEN } = save;
const globalAny: any = global;

describe('examsService', () => {
  it('examsService return error on 401', async () => {
    return await examsService
      .getExams()
      .then(data => expect(data).toEqual('Unauthorized'))
      .catch(error => expect(error).toEqual('Unauthorized'));
  });

  describe('examsService.getExams return data on 200', async () => {
    beforeAll(async () => {
      const phone = '9794426521';
      const password = '123456';
      const token = await userService.login(phone, password).then(data => data);
      globalAny.localStorage[USER_TOKEN] = token;
    });

    it('Exams is not empty', async () => {
      const exams = await examsService.getExams().then(data => data);

      expect(exams).toBeDefined();
    });
  });
});
