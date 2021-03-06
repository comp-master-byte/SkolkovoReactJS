import React,{useEffect} from 'react'
import {Images} from '../../components/Images'
import styles from './Card.module.scss'
import Aos from 'aos'
import "aos/dist/aos"

export const Card = ({props}) => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <section {...props} style={{marginTop: 80}}>
            <div className={styles.container}>
                <div data-aos="zoom-in-right" className={styles.card}>
                    <div className={styles.content}>
                        <div className={styles.imgBx}>
                            <img src={Images[3].image} alt="" />
                        </div>
                        <div className={styles.contentBx}>
                            <h3>Аль-Алуш Ибрагим<br /> <span>Трейдер, спикер</span> </h3>
                        </div>
                    </div>
                    <ul className={styles.list}>
                        <li><a href=""><i className='fa fa-facebook'></i></a></li>
                        <li><a href=""><i className='fa fa-twitter'></i></a></li>
                        <li><a href=""><i className='fa fa-instagram'></i></a></li>
                    </ul>
                </div>

                <div data-aos="zoom-in-down" className={styles.card}>
                    <div className={styles.content}>
                        <div className={styles.imgBx}>
                            <img src={Images[1].image} alt="" />
                        </div>
                        <div className={styles.contentBx}>
                            <h3>Акопьян Карэн <br /> <span>CEO-проекта, программист</span> </h3>
                        </div>
                    </div>
                    <ul className={styles.list}>
                        <li><a href=""><i className='fa fa-facebook'></i></a></li>
                        <li><a href=""><i className='fa fa-twitter'></i></a></li>
                        <li><a href=""><i className='fa fa-instagram'></i></a></li>
                    </ul>
                </div>

                <div data-aos="zoom-in-left" className={styles.card}>
                    <div className={styles.content}>
                        <div className={styles.imgBx}>
                            <img src={Images[4].image} alt="" />
                        </div>
                        <div className={styles.contentBx}>
                            <h3>Штанденко Илья <br /> <span>Дизайнер, маркетолог</span> </h3>
                        </div>
                    </div>
                    <ul className={styles.list}>
                        <li><a href=""><i className='fa fa-facebook'></i></a></li>
                        <li><a href=""><i className='fa fa-twitter'></i></a></li>
                        <li><a href=""><i className='fa fa-instagram'></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
