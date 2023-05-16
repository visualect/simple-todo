import classes from "../../styles/modules/ui/input.module.scss";
import { forwardRef } from "react";

interface IInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef(
  (props: IInputProps, ref: React.LegacyRef<HTMLInputElement>) => {
    return <input {...props} className={classes.input} type="text" ref={ref} />;
  }
);

export default Input;
