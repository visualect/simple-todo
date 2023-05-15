import { ITodoListProps } from "../types/todoTypes";
import TodoItem from "./TodoItem";
import classes from "../styles/modules/list.module.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function TodoList({
  todos,
  removeItem,
  toggleItem,
}: ITodoListProps) {
  return (
    <ul className={classes.list}>
      <AnimatePresence>
        {todos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              removeItem={removeItem}
              toggleItem={toggleItem}
            />
          );
        })}
      </AnimatePresence>
    </ul>
  );
}
