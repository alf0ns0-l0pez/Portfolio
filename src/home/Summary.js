import React from 'react';
import '../index.css';

export default function Summary(props) {
    const { isMobile } = props;
    return (
        <div className='container_exp gradTop' style={{paddingTop:'10rem'}}>
            <form className={isMobile ? 'experience boxMobile':'experience boxNormal'}>
                    <p style={{fontSize:'50px', padding:'0 2rem 0'}}>
                    <b>Hello I'm Alfonso Lopez</b>
                    </p>
                    <p style={{fontSize:'30px', padding:'0 2rem 0'}}>
                        <b>Software Developer Engineer</b>
                    </p>
                    <p style={{padding:'0 2rem 0'}}>
                        I'm Engineer with a can-do attitude, an enthusiastic
                        team player and deep creative thinker, proficient with the
                        systems programming and user experience design.
                        Considering myself a person with ease of theoretical and
                        practical learning. In the last years I have been dedicated to
                        the development of application projects for manufacturing
                        industry.
                    </p>
            </form>
        </div>
    );
};