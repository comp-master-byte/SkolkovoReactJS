import React, { useEffect } from 'react'
import {Images} from './Images'
import { motion } from 'framer-motion'
import { Links } from './Links'

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

        const secondPage = document.querySelector('.infoPage')

        refScroll2.addEventListener('click', function() {
            scrollTo(secondPage)
        })

    }, [])

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
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
                </div>
            </div>
        </header>
    )
}
