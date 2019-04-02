import Profile, { IAction, initialState } from '../profileReducer';
import { IProfile } from '../../actions/interface';
import * as deepFreeze from 'deep-freeze';

describe('Profile reducer', () => {
  it('GET_PROFILE sucess', () => {
    const state = initialState;
    const profile: IProfile = {
      id: '60f3f4ad-466a-44af-a71b-edd6e2803f60',
      firstName: 'Максим',
      lastName: 'Дмитров',
      sex: 'male',
      birthDate: '1970-01-01T00:00:00+00:00',
      email: 'mail_test-1234@mail.ru',
      emailConfirmed: false,
      phone: '9794426521'
    };
    const action: IAction = { type: 'GET_PROFILE', profile };

    deepFreeze([state, action]);
    const result = Profile(state, action);

    expect(result).toEqual(profile);
  });

  it('Defaults array for incorrect action', () =>
    expect(Profile(initialState, {})).toEqual(initialState));
});
