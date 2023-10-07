import '../index.css';
import { useState } from 'react';
export default function ProjectCard() {
    const [cardOver, setCardOver] = useState(false);
    return (
        <div className='card' onMouseOver={() => setCardOver(true)} onMouseLeave={() => setCardOver(false)}>
            {
                !cardOver ?
                    <div className='cardover'>
                        <h2>Title</h2>
                        
                        <p>Language:Python<br/>Language:Python<br/>Language:Python<br/>Language:Python<br/>Language:Python</p>
                        <img src='https://alf0ns0-l0pez.github.io/Portfolio/img/al_logo.png' alt='repository' width='100%' />
                    </div> :
                    <div className='cardleaver'>
                        <h2>Title</h2>
                        <img src='https://alf0ns0-l0pez.github.io/Portfolio/img/al_logo.png' alt='repository' width='100%' />
                        <p>Mucho texto escrito asta ahorita</p>
                    </div>
            }

        </div>
    );
}