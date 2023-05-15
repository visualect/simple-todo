import classes from '../../styles/modules/ui/input.module.scss'

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input {...props} className={classes.input} type="text" />
    )
} 