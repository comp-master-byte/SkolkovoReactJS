import React from 'react'
import './MyModal.scss'

export const MyModal = ({active, setActive, children}) => {
    return (
        <div className={active ? "myModal active" : "myModal"} onClick={() => setActive(false)}>
            <div className={active ? "myModalContent active" : "myModalContent"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
