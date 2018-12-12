import todoReducer, { initialState } from '../todo';

// TODO: Create actions and use them in components and here.
describe('todoReducer', () => {
  describe('add', () => {
    let id = 'randomId';
    let todo = { id, content: "Todo's content" };
    const addTodo = (todo) => ({ type: 'add', todo });

    beforeEach(() => {
      id = 'randomId';
      todo = { id, content: "Todo's content" };
    });

    it('should add a new todo', () => {
      expect(todoReducer(initialState, addTodo(todo))).toEqual({
        todo: { [id]: todo },
      });
    });

    it('should replace todo if it already exists', () => {
      const stateWithTodo = todoReducer(initialState, addTodo(todo));

      const _todo = { ...todo, content: 'new todo content' };

      expect(todoReducer(stateWithTodo, addTodo(_todo))).toEqual({
        todo: { [id]: _todo },
      });
    });

    it('should not add todo if todo does not contain id', () => {
      todo.id = undefined;

      expect(todoReducer(initialState, addTodo(todo))).toBe(initialState);
    });
  });
});
