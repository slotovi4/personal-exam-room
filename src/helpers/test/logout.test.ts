import { logout } from '../logout';
import { save } from '../../actions/types';

const { USER_TOKEN } = save;
const globalAny: any = global;

describe('Helper logout', () => {
  it('Delete user toket from localstorage', () => {
    globalAny.localStorage[USER_TOKEN] = 'njaffnwj21ndml';
    logout();

    expect(globalAny.localStorage[USER_TOKEN]).toEqual(undefined);
  });
});
