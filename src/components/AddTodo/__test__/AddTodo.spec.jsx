import React from 'react';
import { mount } from 'enzyme';

import AddTodo from '../AddTodo';

describe('AddTodo [component]', () => {
  let wrapper;

  const addTodo = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    wrapper = mount(<AddTodo addTodo={addTodo} />);
  });

  it('should change the Input value upon Input onChange', () => {
    wrapper.find('input').simulate('change', { target: { value: 'Input content' } });

    expect(wrapper.find('input').prop('value')).toEqual('Input content');
  });

  it('should call addTodo prop upon submit', () => {
    wrapper.find('input').simulate('change', { target: { value: 'Input content' } });
    wrapper.find('input').simulate('submit');

    expect(addTodo).toHaveBeenCalledWith('Input content');
  });

  it('should reset the internal state upon submit', () => {
    wrapper.find('input').simulate('change', { target: { value: 'Input content' } });
    expect(wrapper.find('input').prop('value')).toEqual('Input content');

    wrapper.find('input').simulate('submit');
    expect(wrapper.find('input').prop('value')).toEqual('');
  });
});
