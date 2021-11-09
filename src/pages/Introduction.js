import React, {useState, useEffect} from 'react'
import { MyButton } from '../UI/button/MyButton'
import { motion } from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos'
import { MyModal } from '../UI/Modal/MyModal'

export const Introduction = () => {

    const [modalActive, setModalActive] = useState(true)

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className="introduction">
            <div className="blur-circle-1"></div>
            <div className="blur-circle-2"></div>
            <div className="container">
                <div className="introduction-content">
                    <motion.div 
                        className="introduction-content--info"
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity:1, x: 0}}
                        transition={{duration: 1.5}}
                    >
                        <h2>Take back your privacy </h2>
                        <p>Security, reliability and speed — on every device, anywhere you go.</p>
                        <MyButton>Get it now</MyButton>
                        {/* <MyModal active={modalActive} setActive={setModalActive}/> */}
                    </motion.div>

                    <div className="introduction-content--circles">
                        <motion.div 
                            className="circle circle-1"
                            style={{cursor: 'pointer'}}
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            initial={{opacity: 0, y: -100}}
                            transition={{duration: 1.5}}
                            animate={{opacity:1, y: 0}}
                        >
                            <h2>3318</h2>
                            <p>Servers</p>
                        </motion.div>
                        <motion.div 
                            className="circle circle-2"
                            drag
                            dragConstraints={{ left: 0, right: 50, top: 0, bottom: 0 }}
                            dragElastic={0.2}
                            style={{cursor: 'pointer'}}
                            initial={{opacity: 0, x: -100}}
                            animate={{opacity:1, x: 0}}
                            transition={{duration: 1.5}}
                        >
                            <h2>62</h2>
                            <p>Countries</p>
                        </motion.div>
                        <motion.div 
                            className="circle circle-3"
                            drag
                            style={{cursor: 'pointer'}}
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            initial={{opacity: 0, x: 100}}
                            animate={{opacity:1, x: 0}}
                            transition={{duration: 1.5}}
                        >
                            <p>Up to</p>
                            <h2>1000Mbps</h2>
                            <p>bandwidth</p>
                        </motion.div>
                        <motion.div 
                            className="circle circle-4"
                            drag
                            style={{cursor: 'pointer'}}
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            initial={{opacity: 0, y: 100}}
                            animate={{opacity:1, y: 0}}
                            transition={{duration: 1.5}}
                        >
                            <p>30-day money-back guarantee</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
