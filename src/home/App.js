import '../index.css';
import Summary from './summary/Summary';
import HeadContent from './headcontent/HeadContent';
import Footer from './footer/Footer';
import PlatformsIcons from './platformsicons/PlatformsIcons';
import Projects from './projects/Projects'
export const App = () => {
    return (
        <>
            <HeadContent />
            <Summary />
            <PlatformsIcons/>
            <Projects/>
            <Footer />
        </>
    );
};
