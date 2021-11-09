import React, { useEffect } from 'react'
import { Window } from '../UI/window.js/Window'
import TextField from '@mui/material/TextField'
import { MyButton } from '../UI/button/MyButton'
import { motion } from 'framer-motion'
import Aos from 'aos'
import "aos/dist/aos.css"


export const Informative = () => {

    useEffect(() => {
        Aos.init({duration:1000})
    }, [])

    return (
        <div className="infoPage">
            <div className="container">
                <div data-aos="zoom-in" className="infoPage-content">
                    <Window/>
                </div>
                <div  className="infoPage-application">
                    <div data-aos="fade-right" className="infoPage-application--text">
                        <h2>Try it free</h2>
                        <p>One package - four tools to protect yourself. From your devices to online presence. Order free 7-day trial for your laptop</p>
                    </div>
                    <form 
                        data-aos="fade-left" 
                        className="infoPage-application--form">
                        <h2>Submit your application</h2>
                        <TextField 
                            style={{marginTop:20, width:'334px', fontSize:30, marginBottom:'50px'}}
                            id="standard-basic" 
                            label="E-mail" 
                            variant="standard" 
                        /> 
                        <MyButton>Try it now</MyButton>
                    </form>
                </div>
                
                <div className="infoPage-plan">
                    <motion.div 
                        whileHover={{cursor: 'pointer'}}
                        drag
                        dragConstraints={{top:0, left:0, bottom:0, right: 0}}
                        data-aos="fade-up-right" 
                        className="item-circle item-circle-1"
                    >
                        choose the plan
                    </motion.div>
                    <motion.div 
                        whileHover={{cursor: 'pointer'}}
                        data-aos="fade-up-left" className="item-circle item-circle-2">
                        Ask a Question
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
