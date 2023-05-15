import { useContext } from "react";
import { ITodoItemProps } from "../types/todoTypes";
import Button from "./ui/Button";
import classes from "../styles/modules/item.module.scss";
import { motion } from "framer-motion";
import { TodoContext } from "../App";

export default function TodoItem({ item }: ITodoItemProps) {
  // TODO: extract removeItem and handleToggle functions using useContext

  const { deleteItem: removeItem, toggleItem } = useContext(TodoContext);

  const handleDelete = (id: string) => {
    removeItem(id);
  };

  const handleToggle = (id: string) => {
    toggleItem(id);
  };

  return (
    <motion.li
      layout
      className={`${classes.item} ${item.completed && classes.itemCompleted}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
        background: item.completed ? "#4D80E6" : "#E5E4E6",
      }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        ease: "easeOut",
        duration: 0.3,
        layout: { duration: 0.3, ease: "circOut" },
      }}
    >
      <div
        className={`${classes.title} ${
          item.completed && classes.titleCompleted
        }`}
      >
        {item.title}
      </div>
      <div className={classes.btnWrapper}>
        <Button onClick={() => handleToggle(item.id)}>Done</Button>
        <Button main={0} onClick={() => handleDelete(item.id)}>
          Delete
        </Button>
      </div>
    </motion.li>
  );
}
