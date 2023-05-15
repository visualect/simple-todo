import { useState } from "react";
import { ITodoFormProps } from "../types/todoTypes";
import classes from "../styles/modules/form.module.scss";
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function TodoForm({ addItem }: ITodoFormProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

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
      <Input type="text" value={value} onChange={handleChange} />
      <Button>Add</Button>
    </form>
  );
}
