import '../index.css';
import Summary from './Summary';
import TopMenu from './TopMenu';
import LinusMsg from './LinusMsg';
import Experience from './Experience';
import Footer from './Footer';
export const App = () => {
    return (
        <>
            <TopMenu />
            <Summary />
            <LinusMsg />
            <Experience />
            <Footer/>
        </>
    );
};
