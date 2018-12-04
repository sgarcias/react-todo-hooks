import React, { useState } from 'react';
import Input from '../Input';

import './AddTodo.scss';

export default function AddTodo({ addTodo }) {
  const [newTodoValue, editAddTodoState] = useState('');

  const handleAddTodoInputOnChange = ({ target: { value } }) => {
    editAddTodoState(value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        addTodo(newTodoValue);
        editAddTodoState('');
      }}
    >
      <div className="Todo__add__wrapper">
        <Input
          value={newTodoValue}
          onChange={handleAddTodoInputOnChange}
          className="Todo__add__input"
          placeholder="Add your todo here!"
        />
      </div>
    </form>
  );
}
