import * as React from 'react';
import { shallow } from 'enzyme';
import Theme, { IProps } from './Theme';

const props: IProps = {
  theme: 'light',
  setThemeStyle: (theme: 'dark') => theme
};
const wrapper = shallow(<Theme {...props} />);

describe('<Theme /> Component', () => {
  describe('Components', () => {
    it('Section are showing', () =>
      expect(wrapper.find('.Theme').exists()).toEqual(true));

    it('Dark button are showing', () =>
      expect(wrapper.find('.Theme-Color_type_dark').exists()).toEqual(true));

    it('Light button are showing', () =>
      expect(wrapper.find('.Theme-Color_type_light').exists()).toEqual(true));
  });

  describe('Active theme', () => {
    it('Dark theme active', () => {
      const nprops: IProps = {
        theme: 'dark',
        setThemeStyle: (theme: 'dark') => theme
      };
      const nwrapper = shallow(<Theme {...nprops} />);

      expect(
        nwrapper.find('.Theme-Color_type_dark.Theme-Color_current').exists()
      ).toEqual(true);
    });

    it('Light theme active', () => {
      const nprops: IProps = {
        theme: 'light',
        setThemeStyle: (theme: 'dark') => theme
      };
      const nwrapper = shallow(<Theme {...nprops} />);

      expect(
        nwrapper.find('.Theme-Color_type_light.Theme-Color_current').exists()
      ).toEqual(true);
    });
  });
});
