import React, { useEffect } from 'react'
import {Images} from './Images'
import { motion } from 'framer-motion'
import { Links } from './Links'
import { Opacity } from '@mui/icons-material'
import { duration } from '@mui/material'

export const Navigation = () => {

    function scrollTo(element) {
        window.scroll ({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth'
        })
    }

    useEffect(() => {

        const refScroll2 = document.querySelector('.link2')
        const refScroll3 = document.querySelector('.link3')
        const refScroll4 = document.querySelector('.link4')

        const secondPage = document.querySelector('.infoPage')
        const thirdPage = document.querySelector('.reviews')
        const fourthPage = document.querySelector('.team')

        refScroll2.addEventListener('click', function() {
            scrollTo(secondPage)
        })

        refScroll3.addEventListener('click', function() {
            scrollTo(thirdPage)
        })

        refScroll4.addEventListener('click', function() {
            scrollTo(fourthPage)
        })

    }, [])

    return (
        <header 
            className="header"
        >
            <div className="container">
                <motion.div 
                    className="header-content"
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity:1, y: 0}}
                    transition={{duration: 1.5}}
                >
                    <div className="header-content--logo">
                        <img src={Images[0].image} alt="" />
                    </div>
                    <nav className="header-content--navigation">
                        {Links.map(item => {
                            return (
                                <motion.li key={item.id} className="header-content--navigation__item"
                                    whileHover={{
                                        scale: 1.2,
                                        transition: { duration: 0.5 },
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <a className={item.className} href="#">{item.link}</a>
                                </motion.li>
                            )
                        })}
                    </nav>
                </motion.div>
            </div>
        </header>
    )
}
