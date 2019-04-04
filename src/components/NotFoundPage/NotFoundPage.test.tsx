import * as React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';

const wrapper = shallow(<NotFoundPage />);

describe('<NotFoundPage /> Component', () => {
  it('Section are showing', () =>
    expect(wrapper.find('.NotFoundPage').exists()).toEqual(true));

  it('Title are showing', () =>
    expect(wrapper.find('.NotFoundPage-Title').exists()).toEqual(true));

  it('Home link are showing', () =>
    expect(wrapper.find('[type="link"]').props().to).toEqual('/'));
});
