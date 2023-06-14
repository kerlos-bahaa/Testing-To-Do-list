import {
  addTask, deleteTask, editTask, updateTaskCompletion, clearCompleted,
} from './__mock__/todo.js';

describe('addTask', () => {
  it('should add a new task to the list', () => {
    const todos = [
      {
        description: 'a',
        completed: false,
        index: 1,
      },
      {
        description: 'ab',
        completed: false,
        index: 2,
      },
      {
        description: 'abc',
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
        description: 'a',
        completed: false,
        index: 1,
      },
      {
        description: 'ab',
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
  it('Edit description of a task', () => {
    const todos = [
      {
        description: 'a',
        completed: false,
        index: 1,
      },
      {
        description: 'ab',
        completed: false,
        index: 2,
      },
      {
        description: 'Description Changed',
        completed: false,
        index: 4,
      },
      {
        description: 'Buy groceries',
        completed: false,
        index: 5,
      },
    ];

    expect(editTask(4, 'Description Changed')).toEqual(todos);
  });
  it('Update completion of a task', () => {
    const todos = [
      {
        description: 'a',
        completed: false,
        index: 1,
      },
      {
        description: 'ab',
        completed: true,
        index: 2,
      },
      {
        description: 'Description Changed',
        completed: false,
        index: 4,
      },
      {
        description: 'Buy groceries',
        completed: false,
        index: 5,
      },
    ];
    expect(updateTaskCompletion(2, true)).toEqual(todos);
  });
  it('Clear completed tasks', () => {
    const todos = [
      {
        description: 'a',
        completed: false,
        index: 1,
      },
      {
        description: 'Description Changed',
        completed: false,
        index: 4,
      },
      {
        description: 'Buy groceries',
        completed: false,
        index: 5,
      },
    ];
    expect(clearCompleted()).toEqual(todos);
  });
});
