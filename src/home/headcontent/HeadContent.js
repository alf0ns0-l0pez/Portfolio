import './HeadContent.css';
export default function HeadContent() {
    return (
        <header id='headcontent'>
            <img src='https://alf0ns0-l0pez.github.io/Portfolio/img/al_logo.png'
                alt="alfonsologo" />
            <section>
                <img className='pcbimg' src='./img/pcbbackground2.png' alt="pcbimg" />
                <img className='profileimg' src='https://alf0ns0-l0pez.github.io/Portfolio/img/profile.png' alt="profileimage" />
            </section>
        </header>
    );
};