import React from 'react'
import styles from './MyButton.module.scss'
import { motion } from 'framer-motion'

export const MyButton = ({children}) => {

    function stopRef(e) {
        e.preventDefault()
    }

    return (
        <motion.button 
            onClick={stopRef}
            className={styles.MyBtn}
            whileHover={{
                scale: 1.095,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.button>
    )
}