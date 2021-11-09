import { style } from '@mui/system'
import React from 'react'
import styles from './Text.module.scss'

export const Text = () => {
    return (
        <div className={styles.wrapper} style={{marginTop: 80, marginBottom: 80}}>
            <div className={styles.staticTxt}>
                I'm a 
            </div>
            <ul className={styles.dynamicTxt}> 
                <li><span>YouTuber</span></li>
                <li><span>Designer</span></li>
                <li><span>Developer</span></li>
                <li><span>Freelancer</span></li>
            </ul>
        </div>
    )
}
