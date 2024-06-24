import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

export const TodoFrom = () => {
  const { state, dispatch } = useContext(TodoContext);

  console.log(state);

  const [task, setTask] = useState("");

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = (Math.random() + 1).toString(36).substring(7);

    const todo = {
      id: id,
      title: task,
      isCompleted: false,
    };
    dispatch({ type: "addTodo", payload: todo });
  };
  return (
    <div>
      <h1>Add Todo</h1>
      <form action="" onSubmit={handelSubmit}>
        <label htmlFor="Todo">Task</label>
        <input
          type="text"
          name="todo"
          className="border border-red-500"
          id="todo"
          onBlur={(e) => setTask(e.target.value)}
        />
        <button className="p-2 ml-4 bg-red-200 rounded" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
