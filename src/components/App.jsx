import React, { useReducer } from 'react';
import generateUUID from 'uuid/v4';

import Todo from './Todo';

import './App.scss';
import AddTodo from './AddTodo';

const initialState = {};
const reducer = (state = initialState, action = {}) => {
  const { todo: existingTodo } = state;

  switch (action.type) {
    case 'add': {
      const { todo } = action;
      const { id, ...newTodo } = todo;

      return { todo: { ...existingTodo, [id]: { id, ...newTodo } } };
    }

    case 'edit': {
      const { id, content } = action;
      // Remove TODO if input does not contain value.
      if (!content.length) {
        // eslint-disable-next-line
        const { [id]: todoToRemove, ...remainingTodo } = existingTodo;

        return { todo: remainingTodo };
      }

      return { todo: { ...existingTodo, [id]: { ...existingTodo[id], content } } };
    }

    case 'complete': {
      const { id } = action;

      return {
        todo: {
          ...existingTodo,
          [id]: { ...existingTodo[id], checked: !existingTodo[id].checked },
        },
      };
    }

    case 'remove': {
      const { id } = action;
      // eslint-disable-next-line
      const { [id]: todoToRemove, ...remainingTodo } = existingTodo;

      return {
        todo: remainingTodo,
      };
    }

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, { todo: initialState });
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
