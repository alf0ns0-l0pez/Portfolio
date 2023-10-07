import '../index.css';

export const App = () => {
    return (
        <>
            <header id='headcontent'>
                <img src='https://alf0ns0-l0pez.github.io/Portfolio/img/al_logo.png'
                    alt="alfonsologo" />
                <section>
                    <img className='pcbimg' src='https://alf0ns0-l0pez.github.io/Portfolio/img/pcbbackground.jpg' alt="pcbimg" />
                    <img className='profileimg' src='https://alf0ns0-l0pez.github.io/Portfolio/img/profile.png' alt="profileimage" />
                </section>
            </header>
            <section style={{ backgroundColor: "#1A1A1A" }} id='sumary'>
                <div id="opensource">
                    <h2 >I'm Alfonso Lopez</h2>
                    <h3>Software Developer</h3>
                    <p>I'm Engineer with a can-do attitude, an enthusiastic
                        team player and deep creative thinker, proficient with the
                        systems programming and user experience design.
                        Considering myself a person with ease of theoretical and
                        practical learning. In the last years I have been dedicated to
                        the development of application projects for manufacturing
                        industry.</p>
                </div>

            </section>
            <section id="opensource">
                <h1 >OpenSource</h1>
                <div className="linux-message">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/220px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg" alt="linuxtorvalds" />
                    <p>“I often compare open source to science. Science took
                        this whole notion of developing ideas in the open and
                        improving on other peoples' ideas. It made science what
                        it is today and made the incredible advances that we have
                        had possible. And I compare that to witchcraft and alchemy,
                        where openness was something you didn't do”.<br /><br /><span>-Linus Torvalds-</span></p>

                </div>
            </section>
            <article id="experience">
                <section>
                    <h1 >Experience</h1>
                </section>

                <div className="work-info">
                    <div id='head-exp'>
                        <img src='https://www.pacmexico.com/PacLogo.png' alt='...' />
                        <h2>PAC MEXICO SA DE CV</h2>
                        <h3>2020/01 - Present</h3>
                    </div>

                    <ul style={{ padding: '20px 20px 20px 60px' }}>
                        <li >
                            <p>Developed a Linux Daemon, witch throught TCP/IP socket control events of every pick and places
                                machines in every manufacturing lines using parallel programming with PYTHON language and in the database SQL SERVER.
                            </p>
                        </li>
                        <li >
                            <p>Developed a Linux Daemon, witch throught TCP/IP socket control events of every pick and places
                                machines in every manufacturing lines using parallel programming with PYTHON language and in the database SQL SERVER.
                            </p>
                        </li>
                        <li >
                            <p>Developed a Linux Daemon, witch throught TCP/IP socket control events of every pick and places
                                machines in every manufacturing lines using parallel programming with PYTHON language and in the database SQL SERVER.
                            </p>
                        </li>
                        <li >
                            <p>Developed a Linux Daemon, witch throught TCP/IP socket control events of every pick and places
                                machines in every manufacturing lines using parallel programming with PYTHON language and in the database SQL SERVER.
                            </p>
                        </li>
                        <li >
                            <p>Developed a Linux Daemon, witch throught TCP/IP socket control events of every pick and places
                                machines in every manufacturing lines using parallel programming with PYTHON language and in the database SQL SERVER.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="work-info">
                    <div id='head-exp'>
                        <img src='https://www.pacmexico.com/PacLogo.png' alt='...' />
                        <h2>PAC MEXICO SA DE CV</h2>
                        <h3>2020/01 - Present</h3>
                    </div>

                    <ul style={{ padding: '20px 20px 20px 60px' }}>
                        <li >
                            <p>Developed a Linux Daemon, witch throught TCP/IP socket control events of every pick and places
                                machines in every manufacturing lines using parallel programming with PYTHON language and in the database SQL SERVER.
                            </p>
                        </li>
                        <li >
                            <p>Developed a Linux Daemon, witch throught TCP/IP socket control events of every pick and places
                                machines in every manufacturing lines using parallel programming with PYTHON language and in the database SQL SERVER.
                            </p>
                        </li>
                        <li >
                            <p>Developed a Linux Daemon, witch throught TCP/IP socket control events of every pick and places
                                machines in every manufacturing lines using parallel programming with PYTHON language and in the database SQL SERVER.
                            </p>
                        </li>
                        <li >
                            <p>Developed a Linux Daemon, witch throught TCP/IP socket control events of every pick and places
                                machines in every manufacturing lines using parallel programming with PYTHON language and in the database SQL SERVER.
                            </p>
                        </li>
                        <li >
                            <p>Developed a Linux Daemon, witch throught TCP/IP socket control events of every pick and places
                                machines in every manufacturing lines using parallel programming with PYTHON language and in the database SQL SERVER.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="work-info">
                    <div id='head-exp'>
                        <img src='https://www.pacmexico.com/PacLogo.png' alt='...' />
                        <h2>PAC MEXICO SA DE CV</h2>
                        <h3>2020/01 - Present</h3>
                    </div>

                    <ul style={{ padding: '20px 20px 20px 60px' }}>
                        <li >
                            <p>Developed a Linux Daemon, witch throught TCP/IP socket control events of every pick and places
                                machines in every manufacturing lines using parallel programming with PYTHON language and in the database SQL SERVER.
                            </p>
                        </li>
                        <li >
                            <p>Developed a Linux Daemon, witch throught TCP/IP socket control events of every pick and places
                                machines in every manufacturing lines using parallel programming with PYTHON language and in the database SQL SERVER.
                            </p>
                        </li>
                        <li >
                            <p>Developed a Linux Daemon, witch throught TCP/IP socket control events of every pick and places
                                machines in every manufacturing lines using parallel programming with PYTHON language and in the database SQL SERVER.
                            </p>
                        </li>
                        <li >
                            <p>Developed a Linux Daemon, witch throught TCP/IP socket control events of every pick and places
                                machines in every manufacturing lines using parallel programming with PYTHON language and in the database SQL SERVER.
                            </p>
                        </li>
                        <li >
                            <p>Developed a Linux Daemon, witch throught TCP/IP socket control events of every pick and places
                                machines in every manufacturing lines using parallel programming with PYTHON language and in the database SQL SERVER.
                            </p>
                        </li>
                    </ul>
                </div>
            </article>
            <footer>
                <p>© Copyright 2023 Alfonso Lopez. All rights reserved.</p>
            </footer>
        </>
    );
};
