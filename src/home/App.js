import '../index.css';

export const App = () => {
    return (
        <>
            <header id='headcontent'>
                <img src='https://alf0ns0-l0pez.github.io/Portfolio/img/al_logo.png'
                    alt="alfonsologo"  />
                <section>
                    <img className='pcbimg' src='https://alf0ns0-l0pez.github.io/Portfolio/img/pcbback1.jpg' alt="pcbimg" />
                    <img className='profileimg' src='https://alf0ns0-l0pez.github.io/Portfolio/img/perfil_gray_fix1.png' alt="profileimage" />
                </section>
            </header>
            <section id="opensource">
                <h1 >Experience</h1>
                <div className="linux-message">
                    <img className="linuxtorvalds-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/220px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg" alt="linuxtorvalds" />
                    <p>I often compare open source to science. Science took
                        this whole notion of developing ideas in the open and
                        improving on other peoples' ideas. It made science what
                        it is today and made the incredible advances that we have
                        had possible. And I compare that to witchcraft and alchemy,
                        where openness was something you didn't do.</p>
                </div>
            </section>

        </>
    );
};
