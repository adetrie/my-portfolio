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
import {Button, Modal, Text} from "@nextui-org/react";

export default function Home() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

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
    setIsLoading(true);
    fetch(process.env.PORTFOLIO_BACKEND_BASEURL + '/me')
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
        {errorMessage && <UnableToLoad></UnableToLoad>}
      </div>
  );
}
