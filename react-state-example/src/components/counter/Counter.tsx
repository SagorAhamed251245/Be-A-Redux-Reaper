import {
  decrement,
  increment,
  incrementByValue,
} from "../../redux/features/counter/counterSlices";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const Counter = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="w-[80%] h-screen mx-auto flex justify-center items-center">
      <div className="flex items-center justify-between gap-10">
        <button
          onClick={() => dispatch(increment())}
          className="px-2 py-3 bg-green-300 rounded"
        >
          Increment
        </button>
        <p className="text-lg font-bold">{count}</p>
        <button
          onClick={() => dispatch(decrement())}
          className="px-2 py-3 bg-red-300 rounded"
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch(incrementByValue({ value: 10 }))}
          className="px-2 py-3 bg-red-300 rounded"
        >
          Increment by value
        </button>
      </div>
    </div>
  );
};

export default Counter;
