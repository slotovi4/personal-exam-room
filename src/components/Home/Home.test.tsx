import * as React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

const wrapper = shallow(<Home />);

describe('<Home /> Component', () => {
  it('Title are showing', () =>
    expect(wrapper.find('.Home-Title').exists()).toEqual(true));
});
