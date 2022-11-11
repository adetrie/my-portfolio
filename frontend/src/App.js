import './App.css';
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import HowItsWork from "./components/HowItsWork";
import Skills from "./components/Skills";
import XPPro from "./components/XPPro";
import Studies from "./components/Studies";
import Loader from "./components/Loader";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

function App() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetchPortfolioApi()
    }, []);

    const renderPortfolio = (
        <motion.div
        >
            env: {process.env.REACT_APP_PORTFOLIO_BACKEND_BASEURL}
            <Home>{data}</Home>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <XPPro></XPPro>
            <Studies></Studies>
            <HowItsWork></HowItsWork>
            <ContactMe></ContactMe>
        </motion.div>
    );

    const fetchPortfolioApi = () => {
        setIsLoading(true);
        fetch(process.env.REACT_APP_PORTFOLIO_BACKEND_BASEURL + '/me')
            .then((response) => response.json())
            .then((response) => {
                setData(response.data)
                setIsLoading(false)
            })
            .catch(() => {
                setErrorMessage("Unable to fetch my portfolio 😢");
                setIsLoading(false);
            });
    };

    return (
        <div>
            <AnimatePresence>
                {isLoading && <Loader/>}
            </AnimatePresence>
            {(!isLoading && errorMessage == null) && renderPortfolio}
            {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
    );
}


export default App;
