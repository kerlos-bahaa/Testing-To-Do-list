function addTask(description) {
  const todos = [];
  const task = {
    description,
    completed: false,
    index: todos.length,
  };
  todos.push(task);
  return todos;
}

const deleteTask = (index) => {
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
  ];
  todos.splice(index, 1);
  return todos;
};

export { addTask, deleteTask };