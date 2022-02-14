import React, { useRef, useEffect } from 'react';
import '../index.css';

export default function ImgCarousel(props) {
    const { isMobile } = props;
    const slideshow = useRef(null);
    const next_slide = () => {
        // Comprobamos que el slideshow tenga elementos
        if (slideshow.current.children.length > 0) {

            // Obtenemos el primer elemento del slideshow.
            const firstElement = slideshow.current.children[0];

            // Establecemos la transicion para el slideshow.
            slideshow.current.style.transition = `10000ms ease-out all`;

            const lenSlide = slideshow.current.children[0].offsetWidth;

            // Movemos el slideshow
            slideshow.current.style.transform = `translateX(-${lenSlide}px)`;

            const transition_slide = () => {
                // Reiniciamos la posicion del Slideshow.
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                // Tomamos el primer elemento y lo mandamos al final.
                slideshow.current.appendChild(firstElement);

                slideshow.current.removeEventListener('transitionend', transition_slide);
            }

            // Eventlistener para cuando termina la animacion.
            slideshow.current.addEventListener('transitionend', transition_slide);
        }
    };
    useEffect(() => {
        setInterval(() => {
            next_slide();
        }, 10000);
    }, []);
    return (
        <div className='slider_complete' >
            <div className='slider_galery' style={isMobile ? {width:'800%'}:{width:'400%'}} ref={slideshow}>
                <img src='https://alf0ns0-l0pez.github.io/Portfolio/img/pcbback1.jpg' className='img_slide' alt="..." />
                <img src='https://alf0ns0-l0pez.github.io/Portfolio/img/pcbback2.jpg' className='img_slide' alt="..." />
                <img src='https://alf0ns0-l0pez.github.io/Portfolio/img/pcbback3.jpg' className='img_slide' alt="..." />
                <img src='https://alf0ns0-l0pez.github.io/Portfolio/img/pcbback4.jpg' className='img_slide' alt="..." />
            </div>
            <div className='over_slider'>
                <img className='profileimage' src='https://alf0ns0-l0pez.github.io/Portfolio/img/profile_image.png' alt="..." />
            </div>
        </div>
    );
};