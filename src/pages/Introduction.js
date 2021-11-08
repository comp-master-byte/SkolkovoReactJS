import React, {useState} from 'react'
import { MyButton } from '../UI/button/MyButton'
import { motion } from 'framer-motion'
import { MyModal } from '../UI/Modal/MyModal'

export const Introduction = () => {

    const [modalActive, setModalActive] = useState(true)

    return (
        <div className="introduction">
            <div className="container">
                <div className="introduction-content">
                    <div className="introduction-content--info">
                        <h2>Take back your privacy </h2>
                        <p>Security, reliability and speed — on every device, anywhere you go.</p>
                        <MyButton>Get it now</MyButton>
                        {/* <MyModal active={modalActive} setActive={setModalActive}/> */}
                    </div>

                    <div className="introduction-content--circles">
                        <motion.div 
                            className="circle circle-1"
                            style={{cursor: 'pointer'}}
                        >
                            <h2>3318</h2>
                            <p>Servers</p>
                        </motion.div>
                        <div className="circle circle-2">
                            <h2>62</h2>
                            <p>Countries</p>
                        </div>
                        <div className="circle circle-3">
                            <p>Up to</p>
                            <h2>1000Mbps</h2>
                            <p>bandwidth</p>
                        </div>
                        <div className="circle circle-4">
                            <p>30-day money-back guarantee</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
