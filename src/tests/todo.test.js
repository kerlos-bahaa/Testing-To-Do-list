import addTask from "./__mock__/todo.js";

describe("addTask", () => {
  it("should add a new task to the list", () => {
    // addTask('Buy groceries');
    expect(addTask("Buy groceries")).toEqual([
      {
        description: "Buy groceries",
        completed: false,
        index: 0,
      },
    ]);
  });
  it("should remove a task from the list", () => {
    expect(deleteTask("Buy groceries")).toEqual([
      {
      },
    ]);
  });
});
