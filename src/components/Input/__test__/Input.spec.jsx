import React from 'react';
import { mount } from 'enzyme';

import Input from '../Input';

describe('Input [component]', () => {
  let wrapper;
  const onChange = jest.fn();
  const props = {
    value: 'Input value',
    onChange,
    disabled: true,
    height: '20',
  };

  beforeEach(() => {
    jest.resetAllMocks();

    wrapper = mount(<Input {...props} />);
  });

  Object.entries(props).forEach(([propName, value]) => {
    it(`should map the ${propName} prop to the input`, () => {
      expect(wrapper.children().prop(propName)).toEqual(value);
    });
  });

  it('should call onChange prop upon change', () => {
    wrapper.simulate('change');

    expect(onChange).toHaveBeenCalled();
  });

  it('should apply completed className if checked prop is true', () => {
    wrapper.setProps({ checked: true });

    expect(wrapper.find('.Input--completed')).toHaveLength(1);
  });

  it('should apply default Input className', () => {
    expect(wrapper.find('.Input')).toHaveLength(1);
  });
});
