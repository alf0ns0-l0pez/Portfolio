import React from 'react';
import '../index.css';

const pages = ['Home', 'Platforms', 'Experiences', 'Contact'];
export default function TopMenu(props) {
    const { isMobile } = props;
    const handleCloseMenu = () => {
    };
    return (
        <div className='top_menu' style={isMobile ? {height:'18rem'}:{height:'10rem'}}>
            <img 
                src='https://alf0ns0-l0pez.github.io/portfolio/img/al_logo.png' 
                className={isMobile ? 'logo_menu_mobile':'logo_menu'} 
                alt="..."/>
            
            {!isMobile?<form style={{marginRight:'4rem'}}>{pages.map((page) => (
                <button
                    className={page=='Home'?'button_menu_home':'button_menu'}
                    key={page}
                    onClick={handleCloseMenu}
                >
                    <b>{page}</b>
                </button>
            ))}</form>:<div/>}
        </div>
    );
};