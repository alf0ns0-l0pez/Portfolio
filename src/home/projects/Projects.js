import ProjectTemplate from "./ProjectTemplate";
import { tradeMindProjectContent } from "../utils/Constants"
export default function Projects(){
    return(
        <ProjectTemplate
            title={tradeMindProjectContent["title"]}
            details={tradeMindProjectContent["details"]}
            resources={tradeMindProjectContent["resources"]}
            imageSource={tradeMindProjectContent["projectImage"]}/>
    );
}