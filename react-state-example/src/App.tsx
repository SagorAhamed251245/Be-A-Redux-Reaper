import Counter from "./components/counter/Counter";

import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      {/* <StateWithReducer /> */}
      <Counter />
    </TodoProvider>
  );
}

export default App;
