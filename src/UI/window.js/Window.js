import React from 'react'
import styles from './Window.module.scss'
import { Icons } from '../../components/Icons'

export const Window = () => {
    return (
        <div className={styles.window}>
            <div className={styles.windowContent}>
                <p>Use it on all your devices</p>
                <div>
                    {Icons.map(icon => {
                        return <img className={styles.windowIcons} src={icon.icon} alt="" />
                    })}
                </div>
            </div>
        </div>
    )
}
