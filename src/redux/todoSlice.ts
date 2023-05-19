import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodoItem } from "../types/todoTypes";

const storage = JSON.parse(
  localStorage.getItem("todos") as string
) as ITodoItem[];

interface IInitialStateType {
  value: ITodoItem[];
}

const initialState: IInitialStateType = {
  value: storage ?? [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{ title: string }>) {
      state.value.push({
        id: self.crypto.randomUUID(),
        title: action.payload.title,
        completed: false,
      });
    },
    deleteItem(state, action: PayloadAction<{ id: string }>) {
      state.value = state.value.filter((item) => action.payload.id !== item.id);
    },
    toggleItem(state, action: PayloadAction<{ id: string }>) {
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          item.completed = !item.completed;
        }
        return item;
      });
    },
  },
});

export const { addItem, deleteItem, toggleItem } = todoSlice.actions;

export default todoSlice.reducer;
