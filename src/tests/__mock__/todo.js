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

export { addTask as default };