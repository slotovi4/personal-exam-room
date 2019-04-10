import * as React from 'react';
import { shallow } from 'enzyme';
import AuthPage, { IProps } from './AuthPage';

const ComposedComponent = () => <span>123</span>;
const ConditionalComponent = AuthPage(ComposedComponent, '/login');

describe('<AuthPage /> Root Component', () => {
  describe('On user is authorized', () => {
    it('ComposedComponent is showing', () => {
      const props: IProps = { loggingIn: true, theme: 'dark' };
      const wrapper = shallow(<ConditionalComponent {...props} />);

      expect(wrapper.text()).toContain('<ComposedComponent />');
    });

    it('Menu is showing', () => {
      const props: IProps = { loggingIn: true, theme: 'dark' };
      const wrapper = shallow(<ConditionalComponent {...props} />);

      expect(wrapper.text()).toContain('<withRouter(Connect(Menu)) />');
    });

    it('Dark theme is apply', () => {
      const props: IProps = { loggingIn: true, theme: 'dark' };
      const wrapper = shallow(<ConditionalComponent {...props} />);

      expect(wrapper.find('section').hasClass('AuthPage_theme_dark')).toEqual(
        true
      );
    });

    it('Light theme is apply', () => {
      const props: IProps = { loggingIn: true, theme: 'light' };
      const wrapper = shallow(<ConditionalComponent {...props} />);

      expect(wrapper.find('section').hasClass('AuthPage_theme_light')).toEqual(
        true
      );
    });
  });

  describe('On user is not authorized', () => {
    it('Redirect', () => {
      const props: IProps = { loggingIn: false, theme: 'dark' };
      const wrapper = shallow(<ConditionalComponent {...props} />);

      expect(wrapper.text()).toContain('<Redirect />');
    });
  });
});
