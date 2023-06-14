import { addTask, deleteTask, editTask } from "./__mock__/todo.js";

describe("addTask", () => {
  it("should add a new task to the list", () => {
    const todos = [
      {
        description: "a",
        completed: false,
        index: 1,
      },
      {
        description: "ab",
        completed: false,
        index: 2,
      },
      {
        description: "abc",
        completed: false,
        index: 3,
      },
      {
        description: "abcd",
        completed: false,
        index: 4,
      },
      {
        description: "Buy groceries",
        completed: false,
        index: 5,
      },
    ];
    expect(addTask("Buy groceries")).toEqual(todos);
  });
  it("should remove a task from the list", () => {
    expect(deleteTask(2)).toEqual([
      {
        description: "a",
        completed: false,
        index: 1,
      },
      {
        description: "ab",
        completed: false,
        index: 2,
      },
      {
        description: "abcd",
        completed: false,
        index: 4,
      },
      {
        description: "Buy groceries",
        completed: false,
        index: 5,
      },
    ]);
  });
  it("Edit description of a task", () => {
    const todos = [
      {
        description: "a",
        completed: false,
        index: 1,
      },
      {
        description: "ab",
        completed: false,
        index: 2,
      },
      {
        description: "abc",
        completed: false,
        index: 3,
      },
      {
        description: "Description Changed",
        completed: false,
        index: 4,
      },
    ];

    expect(editTask(3, "Description Changed")).toEqual(todos);
  });
});
// maybe try this

describe("editTask", () => {
  it("should edit the task with the given index", async () => {
    const todos = [
      {
        index: 0,
        description: "Buy groceries",
      },
      {
        index: 1,
        description: "Do laundry",
      },
    ];

    const updatedTodos =  editTask(0, "Go to the gym");

    expect(updatedTodos).toEqual([
      {
        index: 0,
        description: "Go to the gym",
      },
      {
        index: 1,
        description: "Do laundry",
      },
    ]);
  });
});
