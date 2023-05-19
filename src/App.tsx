import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles/normalize.scss";
import classes from "./styles/modules/main.module.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAppSelector } from "./redux/hooks";

export default function App() {
  const todos = useAppSelector((state) => state.value);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={classes.container}
    >
      <TodoForm />
      <TodoList todos={todos} />
    </motion.div>
  );
}
