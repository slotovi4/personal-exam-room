import * as React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

const wrapper = shallow(<Login loginUser={() => true} />);

describe('<Login /> Component', () => {
  describe('Login header', () => {
    it('Title are showing', () =>
      expect(wrapper.find('.Login-Title').exists()).toEqual(true));

    it('Pre title are showing', () =>
      expect(wrapper.find('.Login-Title_pre').exists()).toEqual(true));
  });

  describe('Login form', () => {
    it('Phone input are showing', () =>
      expect(wrapper.find('[type="tel"]').exists()).toEqual(true));

    it('Phone input are showing', () =>
      expect(wrapper.find('[type="password"]').exists()).toEqual(true));

    it('Lost pass text are showing', () =>
      expect(wrapper.find('.Login-Text_pass').exists()).toEqual(true));

    it('Submit button are showing', () =>
      expect(wrapper.find('[type="submit"]').exists()).toEqual(true));

    it('Save pass checkbox are showing', () =>
      expect(wrapper.find('[type="checkbox"]').exists()).toEqual(true));
  });

  describe('On change checkbox', () => {
    it('Change save pass state', () => {
      wrapper.find('[type="checkbox"]').simulate('change');

      expect(wrapper.state('savePass')).toEqual(true);
    });
  });

  describe('Login form on submit', () => {
    it('Clear form password', () => {
      wrapper.setState({ password: '123' });
      wrapper.find('.Login-Form').simulate('submit', {
        preventDefault() {
          return;
        }
      });

      expect(wrapper.state('password')).toEqual('');
    });
  });

  describe('Login footer', () => {
    it('Contains footer', () =>
      expect(wrapper.find('footer').exists()).toEqual(true));

    it('Footer not empty', () =>
      expect(wrapper.find('footer').text().length).not.toEqual(0));
  });
});
