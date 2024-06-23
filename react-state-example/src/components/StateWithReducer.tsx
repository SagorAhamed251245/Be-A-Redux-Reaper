import { useReducer } from "react";

const initialState = {
  name: "",
  age: "",
  hobbies: [],
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "addName":
      return {
        ...currentState,
        name: action.payload,
      };
    case "addAge":
      return {
        ...currentState,
        age: action.payload,
      };
    case "addHobbies":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };

    default:
      break;
  }
};

export const StateWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log({ state });
  return (
    <>
      <form
        action=""
        className="w-[80vw] mx-auto h-[50vh] my-auto border-red-200 border mt-10 p-32"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          className="p-2 mr-32 border border-gray-500 rounded-xl"
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
        />
        <input
          type="text"
          name="age"
          id="age"
          placeholder="age"
          className="p-2 mr-32 border border-gray-500 rounded-xl"
          onChange={(e) =>
            dispatch({ type: "addAge", payload: e.target.value })
          }
        />
        <input
          type="text"
          name="hobbies"
          id="hobbies"
          placeholder="hobbies"
          className="p-2 mr-32 border border-gray-500 rounded-xl"
          onBlur={(e) =>
            dispatch({ type: "addHobbies", payload: e.target.value })
          }
        />
        <button type="submit" className="px-5 py-3 bg-red-200 rounded-xl">
          Submit
        </button>
      </form>
    </>
  );
};
