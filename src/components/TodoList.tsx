import { ITodoListProps } from "../types/todoTypes";
import TodoItem from "./TodoItem";
import classes from "../styles/modules/list.module.scss";
import { AnimatePresence } from "framer-motion";

export default function TodoList({ todos }: ITodoListProps) {
  return (
    <ul className={classes.list}>
      <AnimatePresence>
        {todos.map((item) => {
          return <TodoItem key={item.id} item={item} />;
        })}
      </AnimatePresence>
    </ul>
  );
}
