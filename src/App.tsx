import { useReducer, useEffect, createContext } from "react";
import { ITodoItem } from "./types/todoTypes";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles/normalize.scss";
import classes from "./styles/modules/main.module.scss";
import { motion } from "framer-motion";
import reducer from "./reducers/reducer";
import { IContextType } from "./types/contextTypes";

const storage = JSON.parse(
  localStorage.getItem("todos") as string
) as ITodoItem[];

const initialState = storage ?? [];

export const TodoContext = createContext<IContextType>({} as IContextType);

export default function App() {
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

  return (
    <TodoContext.Provider value={{ deleteItem, toggleItem, addItem }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={classes.container}
      >
        <TodoForm />
        <TodoList todos={todos} />
      </motion.div>
    </TodoContext.Provider>
  );
}
