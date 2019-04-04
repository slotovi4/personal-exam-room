import * as React from 'react';
import { shallow } from 'enzyme';
import Profile, { IProps } from './Profile';

const props: IProps = {
  profile: {
    id: '123',
    firstName: 'Василий',
    lastName: 'Фамильный',
    sex: 'male',
    birthDate: '20.02.2014',
    email: 'test@mail.ru',
    emailConfirmed: true,
    phone: '+333333333'
  }
};
const wrapper = shallow(<Profile {...props} />);

describe('<Profile /> Component', () => {
  it('Profile are showing', () =>
    expect(wrapper.find('.Profile').exists()).toEqual(true));

  describe('Fields', () => {
    it('firstName are showing', () =>
      expect(wrapper.find('[value="Василий"]').exists()).toEqual(true));

    it('lastName are showing', () =>
      expect(wrapper.find('[value="Фамильный"]').exists()).toEqual(true));

    it('email are showing', () =>
      expect(wrapper.find('[value="test@mail.ru"]').exists()).toEqual(true));

    it('phone are showing', () =>
      expect(wrapper.find('[value="+333333333"]').exists()).toEqual(true));

    it('sex are showing', () =>
      expect(wrapper.find('[type="radio"]').props().defaultValue).toEqual(
        'male'
      ));

    describe('emailConfirmed', () => {
      it('Confirmed showing', () =>
        expect(wrapper.text()).toContain('Подтвержден'));

      it('Not confirmed showing', () => {
        const newprops: IProps = {
          profile: {
            id: '123',
            firstName: 'Василий',
            lastName: 'Фамильный',
            sex: 'male',
            birthDate: '20.02.2014',
            email: 'test@mail.ru',
            emailConfirmed: false,
            phone: '+333333333'
          }
        };
        const newwrapper = shallow(<Profile {...newprops} />);

        expect(newwrapper.text()).toContain('Не подтвержден');
      });
    });
  });
});
