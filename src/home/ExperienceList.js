import React from 'react';
import '../index.css';

export default function ExperienceList(props) {
  const { isMobile } = props;
  return (
    <div className='container_exp gradBot'>
      <div className='title_xxl'><h1 >EXPERIENCES</h1></div>
      <form className={isMobile ? 'experience boxMobile':'experience boxNormal'}>
          <img className='logo_elect left' src='https://www.pacmexico.com/PacLogo.png' alt='...' />
          <h2 >Software Service Engineer</h2>
          <p><b>PAC MEXICO SA DE CV</b><br /><i>2020/01 - Present</i></p>
          <ul style={{ padding: "0 8rem 0 10rem", fontSize: "0.9rem" , paddingBottom:"2rem"}}>
            <li >Developed a USB Dongle in C language using Human
              Interface Device Protocol to send credentials to server
              software in python for then be distributed through TCP /
              IP to every computer of the costumer company into
              intranet.</li>
            <li>Created a telegram chatbot in python to do support to
              customer any time, machines notifications and docs
              consulting.</li>
            <li>Developed a website in React JS to be deployed into
              company witch shows the manufacturing line and info
              charts about process status get of Oracle or SQL Server
              database in real time through Socket IO.</li>
            <li>Developed an auto width adjust conveyor in c with
              postgresql database to connect with others conveyors
              and count the number of units has passed.</li>

          </ul>
          <hr style={{margin:'0 2rem 0'}}/>
          <img className='logo_elect left' src='https://upload.wikimedia.org/wikipedia/commons/d/df/Sanmina_Corporation_logo.svg' alt='...' />
          <h2 >Software Developer</h2>
          <p><b>Sanmina-SCI Corporation</b><br/><i>2018/05 - 2020/01</i></p>
          <ul style={{ padding: "0 8rem 0 10rem", fontSize: "0.9rem" ,paddingBottom:"2rem"}}>
            <li>Developed a test station to sell to customer from
              Atlanta which testes an agitation tower moved by a
              stepper motor, it was based in Microchip Assembly
              programming.</li>
            <li>Development of a Hypot test since data acquisition
              board based in C with Atmega328p microcontroller until
              the User interface in C#.Net Windows Forms.</li>
            <li>Improved the ICT test adding integrated circuit
              programming and data loading in different boards models
              it is based C languages Atmega328p Microcontroller like
              data acquisition board and Python scripts to test and
              charge data.</li>
            <li>Collaborate closely with provider members to plan and
              develop a robust software to test machines through API
              Json based in TESTSTAND, LabView and PYTHON.</li>

          </ul>
          <hr style={{margin:'0 2rem 0'}}/>
          <img className='logo_elect left' src='https://upload.wikimedia.org/wikipedia/commons/d/df/Sanmina_Corporation_logo.svg' alt='...' />
          <h2 >Test Technician</h2>
          <p><b>Sanmina-SCI Corporation</b><br /><i>2017/07 - 2018/05</i></p>
          <ul style={{ padding: "0 8rem 0 10rem", fontSize: "0.9rem"}}>
            <li>Responsible for equipments that handled the
              refrigeration system manufacturing in the Gryphon
              CocaCola project, end to end.</li>
            <li>Automated a refrigeration system manufacturing line
              through the reception of different digitals reports controlled
              by a User interface based in C#.Net Windows Forms.</li>
            <li>Participated in the build of a test station which tests a
              board through CAN communication between CPU and
              Board, all this in C#.net</li>

          </ul>
        </form>
    </div>
  );
};