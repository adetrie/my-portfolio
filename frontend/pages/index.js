import {useEffect, useState} from "react";
import Header from "../components/navigation/Header";
import Skills from "../components/screens/Skills";
import Experiences from "../components/screens/Experiences";
import Education from "../components/screens/Education";
import MyPortfolio from "../components/screens/MyPortfolio";
import Contact from "../components/screens/Contact";
import {AnimatePresence, motion, useScroll} from "framer-motion";
import Loader from "../components/screens/Loader";
import Start from "../components/screens/Start";
import UnableToLoad from "../components/modals/UnableToLoad";
import NavigationScroller from "../components/navigation/NavigationScroller";
import Partners from "../components/screens/Partners";

export default function Home() {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchPortfolioApi()
    }, []);

    const renderPortfolio = (
        <>
            <motion.div>
                <NavigationScroller/>
                <Header></Header>
                <div className="body">
                    <Start></Start>
                    <Experiences></Experiences>
                    <Skills></Skills>
                    <Partners></Partners>
                    <Education></Education>
                    <MyPortfolio></MyPortfolio>
                    <Contact></Contact>
                </div>
            </motion.div>
        </>
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
