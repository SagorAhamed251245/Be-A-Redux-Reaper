import { StateWithReducer } from "./components/StateWithReducer";
import { TodoFrom } from "./components/Todo/TodoFrom";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      {/* <StateWithReducer /> */}
      <TodoFrom />
    </TodoProvider>
  );
}

export default App;
