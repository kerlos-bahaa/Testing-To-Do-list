import { addTask } from "./addTask";

describe("addTask", () => {
  it("should add a new task to the list", () => {
    const todos = [];
    addTask("Buy groceries");
    expect(todos).toEqual([
      {
        description: "Buy groceries",
        completed: false,
        index: 0,
      },
    ]);
  });
});
