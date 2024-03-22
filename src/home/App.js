import '../index.css';
import Summary from './summary/Summary';
import HeadContent from './headcontent/HeadContent';
import Footer from './footer/Footer';
import PlatformsIcons from './platformsicons/PlatformsIcons';
import Projects from './projects/Projects'
import Contact from './contact/Contact';
export const App = () => {
    return (
        <>
            <HeadContent />
            <Summary />
            <PlatformsIcons/>
            <Projects/>
            <Contact/>
            <Footer />
        </>
    );
};
