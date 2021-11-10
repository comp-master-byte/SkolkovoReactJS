import React, { useEffect } from 'react'
import Slider from 'react-slick'
import Aos from 'aos'
import 'aos/dist/aos'
import {MyButton} from '../UI/button/MyButton'
import { Text } from '../UI/strangeText/Text';

function SampleNextArrow(props) {

    const { className, style, onClick } = props;
        return (
            <svg 
            className={className}
            onClick={onClick}
            style={{ ...style, 
                color: '#000', 
                cursor: 'pointer',
                transform: 'translateY(-50%) rotate(180deg)', 
                position: 'absolute',
                background: 'rgba(255, 255, 255, 0.4)',
                boxShadow: '2px 3px 15px #A4C2FF',
                borderRadius: '50%',
                top:'110%',
                left: '10%',
                width: '30px',
                height: '30px'
            }} 
            
            aria-hidden="true" focusable="false" data-prefix="fal" className="svg" data-icon="chevron-circle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zM256 472c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm-86.6-224.5l115.1-115c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L209 256l99.5 99.5c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0l-115.1-115c-4.6-4.8-4.6-12.4.1-17.1z"></path></svg>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
        return (
            <svg 
                className={className}
                onClick={onClick}
                style={{ ...style, 
                    width: '30px',
                    height: '30px',
                    color: '#000', 
                    cursor: 'pointer',
                    transform: 'translateY(-50%)', 
                    position: 'absolute',
                    background: 'rgba(255, 255, 255, 0.4)',
                    boxShadow: '2px 3px 15px #A4C2FF',
                    borderRadius: '50%',
                    top:'110%',
                    left: '5%',
                }} 
                aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-circle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zM256 472c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm-86.6-224.5l115.1-115c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L209 256l99.5 99.5c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0l-115.1-115c-4.6-4.8-4.6-12.4.1-17.1z"></path></svg>
    );
}



export const Reviews = () => {

    function scrollToPage(element) {
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        Aos.init()
    },[])

    useEffect(() => {

        const buttonRef = document.querySelector('#btn')

        const toPage = document.querySelector('.team')

        buttonRef.addEventListener('click', function() {
            scrollToPage(toPage)
        })

    },[])

    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow/>
      };

    return (
        <div className="reviews">
            <div className="container">
                <div className="reviews-content">
                    <Slider  {...settings}>
                        <div>
                            <div className="reviews-content--slider">
                                <div data-aos="fade-right"  className="reviews-content--slider__text">
                                    <h2>Краткий обзор</h2>
                                    <p>На данный момент мы хотим взорвать рынок России, чтобы каждое учебное заведение РФ использовало нашу платформу во время дистанционного обучение, так как нет схожих Российских систем связи. Справа комментарии опрошенных людей</p>
                                </div>
                                <div data-aos="fade-left" className="reviews-content--slider__comment">
                                    <div>“Наконец-то, кто-то решился создать нормальную платформу для обучение! А то честно говоря надоел этот Zoom, программа максимально не подходит для связи во время онлайн-обучения”
                                    </div>
                                    <div>“Ребят, мы верим в вас! Ваш проект может переврнуть всё понятие о связи и контакте во время дистанционного обучения. Сейчас хотя бы Discord спасает, но все равно это не то, ведь я на нём общаюсь с геймерами, а через час например с преподавателем”</div>
                                </div>
                            </div>  
                        </div>
                        <div>
                            <div className="reviews-content--slider">
                                <div className="reviews-content--slider__text">
                                    <h2>Краткий обзор</h2>
                                    <p>На данный момент мы хотим взорвать рынок России, чтобы каждое учебное заведение РФ использовало нашу платформу во время дистанционного обучение, так как нет схожих Российских систем связи. Справа комментарии опрошенных людей</p>
                                </div>
                                <div className="reviews-content--slider__comment">
                                    <div>“Наконец-то, кто-то решился создать нормальную платформу для обучение! А то честно говоря надоел этот Zoom, программа максимально не подходит для связи во время онлайн-обучения”
                                    </div>
                                    <div>“Ребят, мы верим в вас! Ваш проект может переврнуть всё понятие о связи и контакте во время дистанционного обучения. Сейчас хотя бы Discord спасает, но все равно это не то, ведь я на нём общаюсь с геймерами, а через час например с преподавателем”</div>
                                </div>
                            </div>  
                        </div>
                    </Slider>
                    <div style={{textAlign:'center'}}>
                        <Text/> <br />
                        <MyButton id="btn">
                            Перейти к команде!
                        </MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

