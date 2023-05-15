import { ACTIONTYPE } from "../types/reducerTypes";
import { ITodoItem } from "../types/todoTypes";

export default function reducer(
  state: ITodoItem[],
  action: ACTIONTYPE
): ITodoItem[] {
  switch (action.type) {
    case "addItem":
      return [...state, action.newItem];
    case "deleteItem":
      return state.filter((item) => action.id !== item.id);
    case "toggleItem":
      return state.map((item) => {
        if (item.id === action.id) {
          //   item.completed = !item.completed; // WRONG!!!
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    default:
      throw new Error();
  }
}
