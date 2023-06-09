import { ITodoItemProps } from "../types/todoTypes";
import Button from "./ui/Button";
import classes from "../styles/modules/item.module.scss";
import { motion } from "framer-motion";
import { toggleItem, deleteItem } from "../redux/todoSlice";
import { useAppDispatch } from "../redux/hooks";

export default function TodoItem({ item }: ITodoItemProps) {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(
      deleteItem({
        id,
      })
    );
  };

  const handleToggle = (id: string) => {
    dispatch(
      toggleItem({
        id,
      })
    );
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
