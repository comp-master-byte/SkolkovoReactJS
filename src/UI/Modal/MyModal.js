import React from 'react'
import styles from './MyModal.module.scss'

export const MyModal = ({active, setActive}) => {
    return (
        <div className={styles.myModal} onClick={() => setActive(false)}>
            <div className={styles.myModalContent} onClick={e => e.stopPropagation()}>
                
            </div>
        </div>
    )
}
