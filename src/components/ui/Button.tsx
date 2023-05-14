import { IButtonProps } from "../../types/todoTypes"
import classes from '../../styles/modules/ui/button.module.scss'

export default function Button(props: IButtonProps) {
    const { children, main = true } = props
    return (
        <button className={`${classes.btn} ${main ? classes.btnMain : classes.btnAlt}`} {...props}>{children}</button>
    )
}