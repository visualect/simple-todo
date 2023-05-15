import classes from "../../styles/modules/ui/input.module.scss";
import { forwardRef } from "react";

// TODO: fix type errors

const Input = forwardRef(
  (props: InputHTMLAttributes<HTMLInputElement>, ref: HTMLInputElement) => {
    return <input {...props} className={classes.input} type="text" ref={ref} />;
  }
);

export default Input;
