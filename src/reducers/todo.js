export const initialState = JSON.parse(localStorage.getItem('todo')) || {};

export default (state = initialState, action = {}) => {
  const { todo: existingTodo } = state;

  switch (action.type) {
    case 'add': {
      const { todo } = action;
      const { id, ...newTodo } = todo;
      if (!id) return state;

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
