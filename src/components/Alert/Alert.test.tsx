import * as React from 'react';
import { shallow } from 'enzyme';
import { IAlert } from '../../actions/interface';
import Alert from './Alert';

describe('<Alert /> Component', () => {
  describe('On error', () => {
    it('Error message are showing', () => {
      const data: IAlert = { messageType: 'error', message: 'error message' };
      const alert = shallow(<Alert alert={data} />);
      alert.setState({ show: true });

      expect(alert.text()).toEqual('error message');
    });

    it('Error styles apply', () => {
      const data: IAlert = { messageType: 'error', message: 'error message' };
      const alert = shallow(<Alert alert={data} />);
      alert.setState({ show: true });

      expect(alert.find('article').hasClass('Alert_type_error')).toEqual(true);
    });
  });

  describe('On alert', () => {
    it('Alert message are showing', () => {
      const data: IAlert = { messageType: 'alert', message: 'alert message' };
      const alert = shallow(<Alert alert={data} />);
      alert.setState({ show: true });

      expect(alert.text()).toEqual('alert message');
    });

    it('Alert styles apply', () => {
      const data: IAlert = { messageType: 'alert', message: 'alert message' };
      const alert = shallow(<Alert alert={data} />);
      alert.setState({ show: true });

      expect(alert.find('article').hasClass('Alert_type_alert')).toEqual(true);
    });
  });

  describe('On click', () => {
    it('Component hided on click', () => {
      const data: IAlert = { messageType: 'alert', message: 'alert message' };
      const alert = shallow(<Alert alert={data} />);
      alert.setState({ show: true });
      alert.simulate('click');

      expect(alert.find('article').exists()).toEqual(false);
    });
  });
});
