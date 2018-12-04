import React from 'react';
import { mount } from 'enzyme';

import CheckBox from '../CheckBox';

describe('CheckBox [component]', () => {
  let wrapper;
  const onClick = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();

    wrapper = mount(<CheckBox onClick={onClick} />);
  });

  it('should not be checked by default', () => {
    expect(wrapper.find('.CheckBox--checked')).toHaveLength(0);
  });

  it('should be checked if checked prop is true', () => {
    wrapper.setProps({ checked: true });

    expect(wrapper.find('.CheckBox--checked')).toHaveLength(1);
  });

  it('should call onClick prop when div is clicked and checkbox is not checked', () => {
    wrapper.children().simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should call onClick prop when div is clicked and checkbox is checked', () => {
    wrapper.setProps({ checked: true });
    wrapper.children().simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
