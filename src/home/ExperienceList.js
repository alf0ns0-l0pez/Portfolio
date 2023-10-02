import React from 'react';
import '../index.css';

export default function ExperienceList(props) {
  const { isMobile } = props;
  return (
    <div className='container_exp gradBot'>
      <div className='title_xxl'><h1 >Experience</h1></div>
      <form className={isMobile ? 'experience boxMobile' : 'experience boxNormal'}>
        <img className='logo_elect left' src='https://www.pacmexico.com/PacLogo.png' alt='...' />
        <h2 style={{ fontSize: "1.8rem" }}>Software Service Engineer</h2>
        <p style={{ fontSize: "1.5rem" }}><b>PAC MEXICO SA DE CV</b><br /><i>2020/01 - Present</i></p>
        <ul style={{ padding: "0 8rem 0 10rem", fontSize: "1.7rem", paddingBottom: "2rem" }}>
          <li >Developed a Linux Daemon, witch throught TCP/IP socket control events of every pick and places
            machines in every manufacturing lines using parallel programming with PYTHON language and in the database SQL SERVER.</li>
          <li >Developed a WebPage witch display stats like pareto, pie, line and tendency charts to show them the cost of their components scrap 
            during production of every lines, accessing to millions of data located in differents databases.</li>
          <li >Developed Web and desktop apps using
            PYTHON, JAVASCRIPT and C Embedded to automation
            taskes for the electronic manufacturing companies.</li>
          <li>Developed Web Apis in C# to access to 8 different databases and MERGE them using DATATABLES and LINQ.</li>
          <li>Created a telegram CHATBOT in PYTHON to do support to
            customer any time with advices and machines notifications, on the other hand 
            for the Develop Team send Alarms and Log Files.</li>
          <li>Database Management such as SQL Server, Oracle and Postgresql.</li>
          <li>Deploy scripts and Web Apps with Dockers Containers in Linux.</li>
          <li>Developed Web Apis in PYTHON to create CSV and EXCEL reports for different purposes.</li>
          <li >Designed Electronics PCB to acquire information
            from sensors and control motors throught User Interface.</li>
          <li >Designed USB Dongle to provide Encrypt Software Credentials thought intranet network,
            and thus control the use of our applications.</li>
        </ul>
        <hr style={{ margin: '0 2rem 0' }} />
        <img className='logo_elect left' src='https://upload.wikimedia.org/wikipedia/commons/d/df/Sanmina_Corporation_logo.svg' alt='...' />
        <h2 style={{ fontSize: "1.8rem" }}>Software Developer</h2>
        <p style={{ fontSize: "1.5rem" }}><b>Sanmina-SCI Corporation</b><br /><i>2018/05 - 2020/01</i></p>
        <ul style={{ padding: "0 8rem 0 10rem", fontSize: "1.7rem", paddingBottom: "2rem" }}>
          <li>Developed desktop apps using
            PYTHON and C# to automation tests for the electronic manufacturing.</li>
          <li>Database Management such as SQL Server.</li>
          <li>Developed Test Stations Apps to add traceability per Unit, thus providing information to the
            engineering team to solve problems related to their process.</li>
        </ul>
        <hr style={{ margin: '0 2rem 0' }} />
        <img className='logo_elect left' src='https://upload.wikimedia.org/wikipedia/commons/d/df/Sanmina_Corporation_logo.svg' alt='...' />
        <h2 style={{ fontSize: "1.8rem" }}>Test Technician</h2>
        <p style={{ fontSize: "1.5rem" }}><b>Sanmina-SCI Corporation</b><br /><i>2017/07 - 2018/05</i></p>
        <ul style={{ padding: "0 8rem 0 10rem", fontSize: "1.7rem" }}>
          <li >Developed Test Stations Apps in C# to improve the test time and connect them to database MES.</li>
          <li >Handling and repair of test stations for electronic manufacturing projects.</li>
          <li >Design Electronics PCB to improve some test reducing humand error.</li>
        </ul>
      </form>
    </div>
  );
};