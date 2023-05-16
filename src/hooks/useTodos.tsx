import reducer from "../reducers/reducer";
import { ITodoItem } from "../types/todoTypes";
import { useReducer, useEffect } from "react";

const storage = JSON.parse(
  localStorage.getItem("todos") as string
) as ITodoItem[];

const initialState = storage ?? [];

export default function useTodos() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addItem = (newItem: ITodoItem) => {
    dispatch({
      type: "addItem",
      newItem,
    });
  };

  const deleteItem = (id: string) => {
    dispatch({
      type: "deleteItem",
      id,
    });
  };

  const toggleItem = (id: string) => {
    dispatch({
      type: "toggleItem",
      id,
    });
  };

  return { addItem, deleteItem, toggleItem, todos };
}
