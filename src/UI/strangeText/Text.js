import { style } from '@mui/system'
import React from 'react'
import styles from './Text.module.scss'

export const Text = () => {
    return (
        <div className={styles.wrapper} style={{marginTop: 80, marginBottom: 80}}>
            <div className={styles.staticTxt}>
                Я
            </div>
            <ul className={styles.dynamicTxt}> 
                <li><span>Студент</span></li>
                <li><span>Школьник</span></li>
                <li><span>Родитель</span></li>
                <li><span>Конкурент</span></li>
                {/* <li><span>Преподаватель</span></li> */}
            </ul>
        </div>
    )
}
