import React, { useReducer, useEffect } from 'react';
import generateUUID from 'uuid/v4';

import Todo from './Todo';

import './App.scss';
import AddTodo from './AddTodo';

import reducer, { initialState } from '../reducers/todo';

export default function App() {
  const [state, dispatch] = useReducer(reducer, { todo: initialState });

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(state.todo));
  });

  const { todo } = state;

  const addTodo = (content) => {
    dispatch({
      type: 'add',
      todo: {
        id: generateUUID(),
        content,
      },
    });
  };

  return (
    <div className="App">
      <h1 className="Title">Todo</h1>
      <div className="Todo__wrapper">
        <div className="Todo__wrapper__section">
          <AddTodo addTodo={addTodo} />
        </div>
        {!!Object.keys(todo).length && (
          <div className="Todo__wrapper__section">
            {Object.values(todo).map((_todo) => (
              <Todo
                todo={_todo}
                key={_todo.id}
                onChange={({ target: { value: content } }) => {
                  dispatch({ type: 'edit', id: _todo.id, content });
                }}
                onComplete={() => {
                  dispatch({ type: 'complete', id: _todo.id });
                }}
                onRemove={() => dispatch({ type: 'remove', id: _todo.id })}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
