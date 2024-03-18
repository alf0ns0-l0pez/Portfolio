import ProjectTemplate from "./ProjectTemplate";
import { tradeMindProjectContent, minerMonitorProjectContent, boardMotorProjectContent, boardRelayProjectContent } from "../utils/Constants"
export default function Projects() {
    return (
        <>
            <ProjectTemplate
                title={tradeMindProjectContent["title"]}
                details={tradeMindProjectContent["details"]}
                resources={tradeMindProjectContent["resources"]}
                imageSource={tradeMindProjectContent["projectImage"]} />
            <ProjectTemplate
                title={minerMonitorProjectContent["title"]}
                details={minerMonitorProjectContent["details"]}
                resources={minerMonitorProjectContent["resources"]}
                imageSource={minerMonitorProjectContent["projectImage"]} />
            <ProjectTemplate
                title={boardRelayProjectContent["title"]}
                details={boardRelayProjectContent["details"]}
                resources={boardRelayProjectContent["resources"]}
                imageSource={boardRelayProjectContent["projectImage"]} />
            <ProjectTemplate
                title={boardMotorProjectContent["title"]}
                details={boardMotorProjectContent["details"]}
                resources={boardMotorProjectContent["resources"]}
                imageSource={boardMotorProjectContent["projectImage"]} />
        </>

    );
}