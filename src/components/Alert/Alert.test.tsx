import * as React from 'react';
import { shallow } from 'enzyme';
import { IAlert } from '../../actions/interface';
import Alert from './Alert';

const errorData: IAlert = { messageType: 'error', message: 'error message' };
const alertData: IAlert = { messageType: 'alert', message: 'alert message' };

describe('<Alert /> Component', () => {
  describe('On error', () => {
    it('Error message are showing', () => {
      const wrapper = shallow(<Alert alert={errorData} />);
      wrapper.setState({ show: true });

      expect(wrapper.text()).toEqual('error message');
    });

    it('Error styles apply', () => {
      const wrapper = shallow(<Alert alert={errorData} />);
      wrapper.setState({ show: true });

      expect(wrapper.find('article').hasClass('Alert_type_error')).toEqual(
        true
      );
    });
  });

  describe('On alert', () => {
    it('Alert message are showing', () => {
      const wrapper = shallow(<Alert alert={alertData} />);
      wrapper.setState({ show: true });

      expect(wrapper.text()).toEqual('alert message');
    });

    it('Alert styles apply', () => {
      const wrapper = shallow(<Alert alert={alertData} />);
      wrapper.setState({ show: true });

      expect(wrapper.find('article').hasClass('Alert_type_alert')).toEqual(
        true
      );
    });
  });

  describe('On click', () => {
    it('Component hided on click', () => {
      const wrapper = shallow(<Alert alert={alertData} />);
      wrapper.setState({ show: true });
      wrapper.simulate('click');

      expect(wrapper.find('article').exists()).toEqual(false);
    });
  });

  describe('Check props', () => {
    it('Component showed when message not empty', () => {
      const wrapper = shallow(<Alert alert={alertData} />);
      wrapper.setProps({ message: '123' });

      expect(wrapper.state('show')).toEqual(true);
    });
  });
});
