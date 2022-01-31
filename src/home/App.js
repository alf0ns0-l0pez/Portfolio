import React, {useState, useEffect} from "react"
import '../index.css';


import TopMenu from './TopMenu';
import ImgCarousel from "./ImgCarousel";
import Summary from './Summary';
import PlatformsIcons from './PlatformsIcons';
import ExperienceList from './ExperienceList';
import Contact from "./Contact";

export const App = () => {
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    const isMobile = width <= 1000;
    console.log(isMobile);
    return (
        <div>
            <TopMenu isMobile={isMobile}/>
            <ImgCarousel isMobile={isMobile}/>
            <Summary isMobile={isMobile}/>
            <PlatformsIcons/>
            <ExperienceList isMobile={isMobile}/>
            <Contact isMobile={isMobile}/>
        </div>
    );
};
