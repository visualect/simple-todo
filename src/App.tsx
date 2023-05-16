import { createContext } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles/normalize.scss";
import classes from "./styles/modules/main.module.scss";
import { motion } from "framer-motion";
import { IContextType } from "./types/contextTypes";
import useTodos from "./hooks/useTodos";

export const TodoContext = createContext<IContextType>({} as IContextType);

export default function App() {
  const { deleteItem, toggleItem, addItem, todos } = useTodos();

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
