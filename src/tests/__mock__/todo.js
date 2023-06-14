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

function addTask(string) {
  const task = {
    description: string,
    completed: false,
    index: 5,
  };
  todos.push(task);
  return todos;
}

const deleteTask = (index) => {
  todos.splice(index, 1);
  return todos;
};

export { addTask, deleteTask };