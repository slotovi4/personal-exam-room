import { userService } from '../userService';
import { save } from '../../actions/types';

const { USER_TOKEN } = save;
const globalAny: any = global;

describe('userService', () => {
  it('userService.login return user token on 200', async () => {
    const phone = '9794426521';
    const password = '123456';

    return await userService
      .login(phone, password)
      .then(data => expect(data.length).not.toBe(0));
  });

  it('userService.login return error on 400', async () => {
    const phone = '123';
    const password = '123';

    return await userService
      .login(phone, password)
      .catch(error => expect(error).toEqual('Указан неверный формат данных.'));
  });

  it('userService.login return error on 401', async () => {
    const phone = '9794426521';
    const password = '12345';

    return await userService
      .login(phone, password)
      .catch(error => expect(error).toEqual('Указан неверный логин /пароль.'));
  });

  it('userService.logout delete user token from localStorage', async () => {
    globalAny.localStorage[USER_TOKEN] = 'SANJFSKCXMMM';

    userService.logout();

    expect(globalAny.localStorage[USER_TOKEN]).toEqual(undefined);
  });
});
