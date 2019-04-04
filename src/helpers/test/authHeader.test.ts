import { authHeader } from '../authHeader';
import { save } from '../../actions/types';

const { USER_TOKEN } = save;
const globalAny: any = global;

describe('Helper authHeader', () => {
  it('authHeader return header on token', () => {
    globalAny.localStorage[USER_TOKEN] = 'njaffnwj21ndml';
    const res = authHeader();

    expect(res).toEqual({
      Authorization: 'Bearer njaffnwj21ndml'
    });
  });

  it('authHeader return obj on enpty token', () => {
    globalAny.localStorage[USER_TOKEN] = '';
    const res = authHeader();

    expect(res).toEqual({});
  });
});
