import * as React from 'react';
import { shallow } from 'enzyme';
import NotAuthPage, { IProps } from './NotAuthPage';

const ComposedComponent = () => <span>123</span>;
const ConditionalComponent = NotAuthPage(ComposedComponent);

describe('<NotAuthPage /> Root Component', () => {
  describe('On user is authorized', () => {
    it('Redirect', () => {
      const props: IProps = { loggingIn: true };
      const wrapper = shallow(<ConditionalComponent {...props} />);

      expect(wrapper.text()).toContain('<Redirect />');
    });
  });

  describe('On user is not authorized', () => {
    it('Page is showing', () => {
      const props: IProps = { loggingIn: false };
      const wrapper = shallow(<ConditionalComponent {...props} />);

      expect(wrapper.find('.NotAuthPage').exists()).toEqual(true);
    });

    it('ComposedComponent is showing', () => {
      const props: IProps = { loggingIn: false };
      const wrapper = shallow(<ConditionalComponent {...props} />);

      expect(wrapper.text()).toContain('<ComposedComponent />');
    });
  });
});
