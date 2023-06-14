import { addTask, deleteTask } from './__mock__/todo.js';

describe('addTask', () => {
  it('should add a new task to the list', () => {
    const todos = [
      {
        description: 'abcd',
        completed: false,
        index: 1,
      },
      {
        description: 'abcd',
        completed: false,
        index: 2,
      },
      {
        description: 'abcd',
        completed: false,
        index: 3,
      },
      {
        description: 'abcd',
        completed: false,
        index: 4,
      },
      {
        description: 'Buy groceries',
        completed: false,
        index: 5,
      },
    ];
    expect(addTask('Buy groceries')).toEqual(todos);
  });
  it('should remove a task from the list', () => {
    expect(deleteTask(2)).toEqual([
      {
        description: 'abcd',
        completed: false,
        index: 1,
      },
      {
        description: 'abcd',
        completed: false,
        index: 2,
      },
      {
        description: 'abcd',
        completed: false,
        index: 4,
      },
      {
        description: 'Buy groceries',
        completed: false,
        index: 5,
      },
    ]);
  });
});
