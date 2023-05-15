import { IButtonProps } from "../../types/todoTypes"
import classes from '../../styles/modules/ui/button.module.scss'
import { motion } from 'framer-motion'

export default function Button(props: IButtonProps) {
    const { children, main = 1 } = props
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`${classes.btn} ${main ? classes.btnMain : classes.btnAlt}`} {...props}>{children}
        </motion.button>
    )
}