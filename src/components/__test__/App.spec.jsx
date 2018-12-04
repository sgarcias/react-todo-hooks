import React from 'react';
import { mount } from 'enzyme';

import App from '../App';

describe('App [component]', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('should render the AddTodo component with the addTodo function', () => {
    expect(typeof wrapper.find('AddTodo').prop('addTodo')).toBe('function');
  });

  // TODO: Add more unit tests once React Hooks are fully supported by enzyme.
});
