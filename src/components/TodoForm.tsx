import { useState, useContext, useRef, useEffect } from "react";
import classes from "../styles/modules/form.module.scss";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { TodoContext } from "../App";

export default function TodoForm() {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const { addItem } = useContext(TodoContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      addItem({
        id: self.crypto.randomUUID(),
        title: value,
        completed: false,
      });
    }
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Input type="text" value={value} onChange={handleChange} ref={inputRef} />
      <Button>Add</Button>
    </form>
  );
}
