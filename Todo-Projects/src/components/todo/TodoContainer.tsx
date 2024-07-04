import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="w-full h-full p-[5px] bg-primary-gradient rounded-xl">
        {/* <div className="flex items-center justify-center p-5 text-2xl font-bold bg-white rounded-xl">
          <p> There is no task pending</p>
        </div> */}
        <div className="w-full h-full p-5 space-y-3 bg-white rounded-lg">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
