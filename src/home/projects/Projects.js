import { useState } from "react";
import './Projects.css'
import ProjectTemplate from "./ProjectTemplate";
import { tradeMindProjectContent, minerMonitorProjectContent, 
    boardMotorProjectContent, boardRelayProjectContent, 
    usbserialProjectContent, serialWebApiProjectContent } from "../utils/Constants"
import TerminalIcon from '@mui/icons-material/Terminal';

export default function Projects() {
    const [projectSelected, setProjectSelected] = useState("")
    return (
        <div className="projectsection">
            <ul>
                <li>
                    <TerminalIcon sx={{ fontSize: 70, color: "#95ffe6" }} />
                </li>
                <li>
                    <h1>Projects</h1>
                </li>

            </ul>
            <ProjectTemplate
                title={tradeMindProjectContent["title"]}
                details={tradeMindProjectContent["details"]}
                resources={tradeMindProjectContent["resources"]}
                imageSource={tradeMindProjectContent["projectImage"]}
                setProjectSelected={setProjectSelected}
                projectSelected={projectSelected} />
            <ProjectTemplate
                title={minerMonitorProjectContent["title"]}
                details={minerMonitorProjectContent["details"]}
                resources={minerMonitorProjectContent["resources"]}
                imageSource={minerMonitorProjectContent["projectImage"]}
                setProjectSelected={setProjectSelected}
                projectSelected={projectSelected} />
            <ProjectTemplate
                title={serialWebApiProjectContent["title"]}
                details={serialWebApiProjectContent["details"]}
                resources={serialWebApiProjectContent["resources"]}
                imageSource={serialWebApiProjectContent["projectImage"]}
                setProjectSelected={setProjectSelected}
                projectSelected={projectSelected} />
            <ProjectTemplate
                title={boardRelayProjectContent["title"]}
                details={boardRelayProjectContent["details"]}
                resources={boardRelayProjectContent["resources"]}
                imageSource={boardRelayProjectContent["projectImage"]}
                setProjectSelected={setProjectSelected}
                projectSelected={projectSelected} />
            <ProjectTemplate
                title={boardMotorProjectContent["title"]}
                details={boardMotorProjectContent["details"]}
                resources={boardMotorProjectContent["resources"]}
                imageSource={boardMotorProjectContent["projectImage"]}
                setProjectSelected={setProjectSelected}
                projectSelected={projectSelected} />
            <ProjectTemplate
                title={usbserialProjectContent["title"]}
                details={usbserialProjectContent["details"]}
                resources={usbserialProjectContent["resources"]}
                imageSource={usbserialProjectContent["projectImage"]}
                setProjectSelected={setProjectSelected}
                projectSelected={projectSelected} />
        </div>

    );
}