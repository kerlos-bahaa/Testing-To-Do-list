function addTask(description) {
  const task = {
    description,
    completed: false,
    index: todos.length,
  };
  todos.push(task);
}
