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

const editTask = (index, string) => {
  const task = todos.find((task) => task.index === index + 1);
  if (task) {
    task.description = string;
  }
  return todos;
};

export {
  addTask, deleteTask, editTask, todos,
};