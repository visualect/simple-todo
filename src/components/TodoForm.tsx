import { useState, useRef, useEffect } from "react";
import classes from "../styles/modules/form.module.scss";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/todoSlice";

export default function TodoForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      dispatch(
        addItem({
          title: value,
        })
      );
    }
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Input value={value} onChange={handleChange} ref={inputRef} />
      <Button>Add</Button>
    </form>
  );
}
