import React, {useState, useEffect} from 'react'
import { MyButton } from '../UI/button/MyButton'
import { motion } from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos'
import { MyModal } from '../UI/Modal/MyModal'
import { Login } from '../UI/Login/Login'

export const Introduction = () => {

    const [modalActive, setModalActive] = useState(false)

    function modalClick() {
        setModalActive(prev => !prev)
    }

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
                        <h2>Единая образовательная среда России</h2>
                        <p>Удобно, актуально, быстро - вся информация в один клик</p>
                        <MyModal active={modalActive} setActive={setModalActive}>
                            <Login>
                            </Login>
                        </MyModal>
                        <MyButton onClick={modalClick} >Личный кабинет</MyButton>
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
                            <h2>Все образовательные</h2>
                            <p>Учреждения</p>
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
                            <h2>ОТЗЫВЫ</h2>
                        </motion.div>
                        <motion.div 
                            className="circle circle-3"
                            drag
                            style={{cursor: 'pointer'}}
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            initial={{opacity: 0, x: 100}}
                            animate={{opacity:1, x: 0}}
                            transition={{duration: 1.5}}
                        >   <p>Доступные</p>
                            <h2>Видеоконференции</h2>
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
                            <p>РАСПИСАНИЕ</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
