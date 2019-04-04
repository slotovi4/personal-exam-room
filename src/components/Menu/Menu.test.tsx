import * as React from 'react';
import { shallow } from 'enzyme';
import Menu, { IProps } from './Menu';

const location: any = {
  pathname: '/',
  search: '',
  hash: '',
  state: undefined,
  key: '12'
};

describe('<Menu /> Component', () => {
  describe('Menu components', () => {
    it('Ligth theme is applying', () => {
      const props: IProps = {
        lastName: 'Фамилия',
        firstName: 'Имя',
        getUserProfile: () => true,
        logoutUser: () => true,
        theme: 'light',
        location
      };

      const wrapper = shallow(<Menu {...props} />);

      expect(wrapper.find('.Menu-Title_theme_light').exists()).toEqual(true);
    });

    it('Dark theme is applying', () => {
      const props: IProps = {
        lastName: 'Фамилия',
        firstName: 'Имя',
        getUserProfile: () => true,
        logoutUser: () => true,
        theme: 'dark',
        location
      };

      const wrapper = shallow(<Menu {...props} />);

      expect(wrapper.find('.Menu-Title_theme_dark').exists()).toEqual(true);
    });

    it('User firstName is showing', () => {
      const props: IProps = {
        lastName: 'Фамильный',
        firstName: 'Иван',
        getUserProfile: () => true,
        logoutUser: () => true,
        theme: 'dark',
        location
      };

      const wrapper = shallow(<Menu {...props} />);

      expect(wrapper.find('.Menu-Title').text()).toContain('Иван');
    });

    it('User lastName is showing', () => {
      const props: IProps = {
        lastName: 'Фамильный',
        firstName: 'Иван',
        getUserProfile: () => true,
        logoutUser: () => true,
        theme: 'dark',
        location
      };

      const wrapper = shallow(<Menu {...props} />);

      expect(wrapper.find('.Menu-Title').text()).toContain('Фамильный');
    });
  });

  describe('Link page active', () => {
    it('Active / Link', () => {
      const props: IProps = {
        lastName: 'Фамильный',
        firstName: 'Иван',
        getUserProfile: () => true,
        logoutUser: () => true,
        theme: 'dark',
        location
      };

      const wrapper = shallow(<Menu {...props} />);

      expect(wrapper.find('.Menu-Link_active').props().to).toEqual('/');
    });

    it('Active /profile Link', () => {
      const newlocation: any = {
        pathname: '/profile',
        search: '',
        hash: '',
        state: undefined,
        key: '12'
      };
      const props: IProps = {
        lastName: 'Фамильный',
        firstName: 'Иван',
        getUserProfile: () => true,
        logoutUser: () => true,
        theme: 'dark',
        location: newlocation
      };

      const wrapper = shallow(<Menu {...props} />);

      expect(wrapper.find('.Menu-Link_active').props().to).toEqual('/profile');
    });

    it('Active /exams Link', () => {
      const newlocation: any = {
        pathname: '/exams',
        search: '',
        hash: '',
        state: undefined,
        key: '12'
      };
      const props: IProps = {
        lastName: 'Фамильный',
        firstName: 'Иван',
        getUserProfile: () => true,
        logoutUser: () => true,
        theme: 'dark',
        location: newlocation
      };

      const wrapper = shallow(<Menu {...props} />);

      expect(wrapper.find('.Menu-Link_active').props().to).toEqual('/exams');
    });
  });
});
