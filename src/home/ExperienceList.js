import React from 'react';
import '../index.css';

export default function ExperienceList(props) {
  const { isMobile } = props;
  return (
    <div className='container_exp gradBot'>
      <div className='title_xxl'><h1 >Experience</h1></div>
      <form className={isMobile ? 'experience boxMobile':'experience boxNormal'}>
          <img className='logo_elect left' src='https://www.pacmexico.com/PacLogo.png' alt='...' />
          <h2 style={{ fontSize: "1.8rem"}}>Software Service Engineer</h2>
          <p style={{ fontSize: "1.5rem"}}><b>PAC MEXICO SA DE CV</b><br /><i>2020/01 - Present</i></p>
          <ul style={{ padding: "0 8rem 0 10rem", fontSize: "1.7rem" , paddingBottom:"2rem"}}>
            <li >Develop Web and desktop apps using 
              PYTHON, JAVASCRIPT and C Embedded to automation 
              taskes for the electronic manufacturing companies.</li>
            <li>Created a telegram chatbot in python to do support to
              customer any time, machines notifications and docs
              consulting.</li>
            <li>Database Management such as SQL Server, Oracle and Postgresql.</li>
            <li>Deploy scripts and web apps with Dockers Containers in Linux.</li>
            <li >Design Electronics PCB to acquire information 
              from sensors and control motors throught User Interface.</li>
          </ul>
          <hr style={{margin:'0 2rem 0'}}/>
          <img className='logo_elect left' src='https://upload.wikimedia.org/wikipedia/commons/d/df/Sanmina_Corporation_logo.svg' alt='...' />
          <h2 style={{ fontSize: "1.8rem"}}>Software Developer</h2>
          <p style={{ fontSize: "1.5rem"}}><b>Sanmina-SCI Corporation</b><br/><i>2018/05 - 2020/01</i></p>
          <ul style={{ padding: "0 8rem 0 10rem", fontSize: "1.7rem" ,paddingBottom:"2rem"}}>
            <li>Develop desktop apps using 
              PYTHON and C# to automation tests for the electronic manufacturing.</li>
            <li>Database Management such as SQL Server.</li>
          </ul>
          <hr style={{margin:'0 2rem 0'}}/>
          <img className='logo_elect left' src='https://upload.wikimedia.org/wikipedia/commons/d/df/Sanmina_Corporation_logo.svg' alt='...' />
          <h2 style={{ fontSize: "1.8rem"}}>Test Technician</h2>
          <p style={{ fontSize: "1.5rem"}}><b>Sanmina-SCI Corporation</b><br /><i>2017/07 - 2018/05</i></p>
          <ul style={{ padding: "0 8rem 0 10rem", fontSize: "1.7rem"}}>
            <li >Develop Test Stations Apps in C# to improve the test time and connect them to database MES.</li>
            <li >Handling and repair of test stations for electronic manufacturing projects.</li>
            <li >Design Electronics PCB to improve some test reducing humand error.</li>
          </ul>
        </form>
    </div>
  );
};