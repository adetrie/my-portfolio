import {useEffect} from "react";
import Header from "../components/navigation/Header";
import Skills from "../components/screens/Skills";
import Experiences from "../components/screens/Experiences";
import Education from "../components/screens/Education";
import MyPortfolio from "../components/screens/MyPortfolio";
import Contact from "../components/screens/Contact";
import Start from "../components/screens/Start";
import NavigationScroller from "../components/navigation/NavigationScroller";
import Partners from "../components/screens/Partners";

export default function Home() {

    useEffect(() => {
    }, []);


    return (
        <div>
            <NavigationScroller/>
            <Header></Header>
            <div className="body">
                <Start></Start>
                <div className="end-start"></div>
                <Experiences></Experiences>
                <div className="end-experiences"></div>
                <Skills></Skills>
                <div className="end-skills"></div>
                <Partners></Partners>
                <div className="end-partners"></div>
                <Education></Education>
                <div className="end-education"></div>
                <MyPortfolio></MyPortfolio>
                <div className="end-porfolio"></div>
                <Contact></Contact>
                <div className="end-contact"></div>
            </div>
        </div>
    );
}
