import { useState } from "react";
import { useGetTodosQuery } from "../../redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  /*  const todos = useAppSelector((state) => state.todos.todos).sort((a, b) =>
    a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
  ); */
  const [priority, setPriority] = useState("");
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter setPriority={setPriority} priority={priority} />
      </div>
      <div className="w-full h-full p-[3px] bg-primary-gradient rounded-xl">
        <div className="w-full h-full p-5 space-y-3 bg-white rounded-lg">
          {todos?.data?.map((item, index) => (
            <TodoCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
