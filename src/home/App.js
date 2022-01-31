import React, {useState, useEffect, useRef} from "react"
import '../index.css';


import TopMenu from './TopMenu';
import ImgCarousel from "./ImgCarousel";
import Summary from './Summary';
import PlatformsIcons from './PlatformsIcons';
import ExperienceList from './ExperienceList';
import Contact from "./Contact";

export const App = () => {
    const homeRef = useRef();
    const platRef = useRef();
    const expRef = useRef();
    const contRef = useRef();
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
            <TopMenu ref={homeRef} isMobile={isMobile} 
                dataRef={[homeRef,platRef, expRef, contRef]}/>
            <ImgCarousel isMobile={isMobile}/>
            <Summary isMobile={isMobile}/>
            <PlatformsIcons ref={platRef}/>
            <ExperienceList  ref={expRef} isMobile={isMobile}/>
            <Contact ref={contRef} isMobile={isMobile}/>
        </div>
    );
};
