import React from 'react'
import { Images } from './Images'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-content--logo">
                        <img width='200' src={Images[0].image} alt="" />
                    </div>
                    <ul className="footer-content--list">
                        <li className="footer-content--list__item">О сайте</li>
                        <li className="footer-content--list__item">Тех поддержка</li>
                        <li className="footer-content--list__item">Авторские права</li>
                        <li className="footer-content--list__item">Связаться с нами</li>
                    </ul>
                    <legend>
                        2021 Copyright ShadowHand®. All rights reserved.
                    </legend>
                </div>
            </div>
        </footer>
    )
}
