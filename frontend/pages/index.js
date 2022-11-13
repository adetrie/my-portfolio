import {useEffect, useState} from "react";
import NavBar from "../components/screens/NavBar";
import AboutMe from "../components/screens/AboutMe";
import Skills from "../components/screens/Skills";
import XPPro from "../components/screens/XPPro";
import Studies from "../components/screens/Studies";
import HowItsWork from "../components/screens/HowItsWork";
import ContactMe from "../components/screens/ContactMe";
import {AnimatePresence, motion} from "framer-motion";
import Loader from "../components/screens/Loader";
import Start from "../components/screens/Start";
import UnableToLoad from "../components/modals/UnableToLoad";

export default function Home() {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchPortfolioApi()
    }, []);

    const renderPortfolio = (
        <motion.div>
            <NavBar></NavBar>
            <Start></Start>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <XPPro></XPPro>
            <Studies></Studies>
            <HowItsWork></HowItsWork>
            <ContactMe></ContactMe>
        </motion.div>
    );


    const fetchPortfolioApi = () => {
        fetch(process.env.PORTFOLIO_BACKEND_BASEURL + '/me')
            .then((response) => response.json())
            .then((response) => {
                setData(response.data)
                setIsLoaded(true)
            })
            .catch(() => {
                setIsLoaded(true);
                setError(true);
            });
    };

    return (
        <div>
            <AnimatePresence>
                {!isLoaded && <Loader stopAnimation={setShowContent}/>}
            </AnimatePresence>
            {(isLoaded && showContent && error === false) && renderPortfolio}
            {error && <UnableToLoad></UnableToLoad>}
        </div>
    );
}
