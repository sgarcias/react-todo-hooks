import React from 'react';
import { mount } from 'enzyme';

import Todo from '../Todo';

describe('Todo [component]', () => {
  let wrapper;
  const content = 'Todo value';
  const onComplete = jest.fn();
  const onChange = jest.fn();
  const onRemove = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();

    wrapper = mount(
      <Todo
        todo={{ content, checked: true }}
        onComplete={onComplete}
        onChange={onChange}
        onRemove={onRemove}
      />,
    );
  });

  it('should map the proper pros to Input component', () => {
    const { value, checked, onChange } = wrapper.find('Input').props();

    expect(value).toBe(content);
    expect(checked).toBe(true);
    expect(onChange).toBe(onChange);
  });

  it('should map the proper props to CheckBox', () => {
    const { checked, onClick } = wrapper.find('CheckBox').props();

    expect(checked).toBe(true);
    expect(onClick).toBe(onComplete);
  });

  it('should map the proper props to Delete', () => {
    const { width, height, onClick } = wrapper.find('Delete').props();

    expect(wrapper.find('Delete').hasClass('Todo__delete__icon')).toBe(true);
    expect(width).toBe('30');
    expect(height).toBe('30');
    expect(onClick).toBe(onRemove);
  });
});
