import { profileService } from '../profileService';
import { userService } from '../userService';
import { save } from '../../actions/types';

const { USER_TOKEN } = save;
const globalAny: any = global;

describe('profileService', () => {
  it('profileService.getProfile return error on 401', async () => {
    return await profileService
      .getProfile()
      .catch(error => expect(error).toEqual('Unauthorized'));
  });

  describe('profileService.getProfile return data on 200', async () => {
    beforeAll(async () => {
      const phone = '9794426521';
      const password = '123456';
      const token = await userService.login(phone, password).then(data => data);
      globalAny.localStorage[USER_TOKEN] = token;
    });

    it('birthDate is not empty', async () => {
      const profile = await profileService.getProfile().then(data => data);

      expect(profile.birthDate).toBeDefined();
    });

    it('email is not empty', async () => {
      const profile = await profileService.getProfile().then(data => data);
      expect(profile.email).toBeDefined();
    });

    it('emailConfirmed is not empty', async () => {
      const profile = await profileService.getProfile().then(data => data);

      expect(profile.emailConfirmed).toBeDefined();
    });

    it('firstName is not empty', async () => {
      const profile = await profileService.getProfile().then(data => data);

      expect(profile.firstName).toBeDefined();
    });

    it('lastName is not empty', async () => {
      const profile = await profileService.getProfile().then(data => data);

      expect(profile.lastName).toBeDefined();
    });

    it('id is not empty', async () => {
      const profile = await profileService.getProfile().then(data => data);
      expect(profile.id).toBeDefined();
    });

    it('phone is not empty', async () => {
      const profile = await profileService.getProfile().then(data => data);
      expect(profile.phone).toBeDefined();
    });

    it('sex is not empty', async () => {
      const profile = await profileService.getProfile().then(data => data);
      expect(profile.sex).toBeDefined();
    });
  });
});
