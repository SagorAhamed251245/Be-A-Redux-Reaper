import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export type TTodo = {
  title: string;
  description: string;
  isCompleted?: boolean;
  id: string;
};
type TInitialState = {
  todos: TTodo[];
};
const initialState: TInitialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((item) => item.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;
