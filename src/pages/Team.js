import React, { useEffect } from 'react'
import {Card} from '../UI/card/Card'
import Aos from 'aos'
import "aos/dist/aos"

export const Team = () => {

    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="team">
            <div className="container">
                <div className="team-content">
                    <h2 data-aos="zoom-in">Создатели проекта Asoka</h2>
                    <Card data-aos="zoom-in-down"/>
                    <div style={{textAlign: 'right', width: '100%', marginTop: 40}}>
                        <strong >"Данный сайт - ручная работа, с ноткой харизмы и чувством стиля" - 
                            Team Lead проекта Asoka и React JS программист, Акопьян Карэн
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
