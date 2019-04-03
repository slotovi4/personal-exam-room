import * as React from 'react';
import { shallow } from 'enzyme';
import { IAlert } from '../../actions/interface';
import Alert from './Alert';

const errorData: IAlert = { messageType: 'error', message: 'error message' };
const alertData: IAlert = { messageType: 'alert', message: 'alert message' };

describe('<Alert /> Component', () => {
  describe('On error', () => {
    it('Error message are showing', () => {
      const alert = shallow(<Alert alert={errorData} />);
      alert.setState({ show: true });

      expect(alert.text()).toEqual('error message');
    });

    it('Error styles apply', () => {
      const alert = shallow(<Alert alert={errorData} />);
      alert.setState({ show: true });

      expect(alert.find('article').hasClass('Alert_type_error')).toEqual(true);
    });
  });

  describe('On alert', () => {
    it('Alert message are showing', () => {
      const alert = shallow(<Alert alert={alertData} />);
      alert.setState({ show: true });

      expect(alert.text()).toEqual('alert message');
    });

    it('Alert styles apply', () => {
      const alert = shallow(<Alert alert={alertData} />);
      alert.setState({ show: true });

      expect(alert.find('article').hasClass('Alert_type_alert')).toEqual(true);
    });
  });

  describe('On click', () => {
    it('Component hided on click', () => {
      const alert = shallow(<Alert alert={alertData} />);
      alert.setState({ show: true });
      alert.simulate('click');

      expect(alert.find('article').exists()).toEqual(false);
    });
  });
});
