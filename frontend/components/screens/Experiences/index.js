import {useEffect} from 'react';
import {StyledExperiencesSection} from "./styles";
import useWindowDimensions from "../../../hooks/useWindowsDimensions";
import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {

    const {height, width} = useWindowDimensions();

    ScrollTrigger.create({
        trigger: document.querySelector("h1_experience"),
        start: "top top",
        // endTrigger: "#otherID",
        end: "bottom 50%+=100px",
        toggleActions: "play play play play",
        animation: gsap.to(document.querySelector(".h1_experience"), {rotation: 27, x: 100, duration: 1})
    })

    useEffect(() => {
    }, []);

    return (
        <StyledExperiencesSection id={"experiences"}>
            <div className="experience-grid display-none-onmobile">
                <h1 className="h1_experience">Experiences</h1>
                <div className="experience-item-delimiter"></div>
                <div className="experience-item-empty"></div>

                <div className="experience-item-empty"></div>
                <div className="experience-item-delimiter"></div>
                <div className="experience-item experience-item-right">
                    <div className="experience-function"><h2>Java Developer</h2></div>
                    <div className="experience-partner"><h2>Banque Degroof Petercam</h2></div>
                    <div className="experience-description"><h3>🇱🇺 Luxembourg</h3></div>
                </div>

                <div className="experience-item experience-item-left">
                    <div className="experience-function"><h2>IT Solution Architect</h2></div>
                    <div className="experience-partner"><h2>PwC Luxembourg</h2></div>
                    <div className="experience-description"><h3>🇱🇺 Luxembourg</h3></div>
                </div>
                <div className="experience-item-delimiter"></div>
                <div className="experience-item-empty"></div>

                <div className="experience-item-empty"></div>
                <div className="experience-item-delimiter"></div>
                <div className="experience-item experience-item-right">
                    <div className="experience-function"><h2>Java Developer</h2></div>
                    <div className="experience-partner"><h2>Banque Degroof Petercam</h2></div>
                    <div className="experience-description"><h3>🇱🇺 Luxembourg</h3></div>
                </div>

                <div className="experience-item-empty"></div>
                <div className="experience-item-delimiter"></div>
                <div className="experience-item experience-item-right">
                    <div className="experience-function"><h2>Java Developer</h2></div>
                    <div className="experience-partner"><h2>Banque Degroof Petercam</h2></div>
                    <div className="experience-description"><h3>🇱🇺 Luxembourg</h3></div>
                </div>

            </div>

            <div className="experience-mobile-content">
                <h1 className="">Experiences</h1>
                <div className="experience-grid">
                    <div className="experience-item-delimiter"></div>
                    <div className="experience-item experience-item-right">
                        <div className="experience-function"><h2>Java Developer</h2></div>
                        <div className="experience-partner"><h2>Banque Degroof Petercam</h2></div>
                        <div className="experience-description"><h3>🇱🇺 Luxembourg</h3></div>
                    </div>

                    <div className="experience-item-delimiter"></div>
                    <div className="experience-item experience-item-right">
                        <div className="experience-function"><h2>IT Solution Architect</h2></div>
                        <div className="experience-partner"><h2>PwC Luxembourg</h2></div>
                        <div className="experience-description"><h3>🇱🇺 Luxembourg</h3></div>
                    </div>

                    <div className="experience-item-delimiter"></div>
                    <div className="experience-item experience-item-right">
                        <div className="experience-function"><h2>Java Developer</h2></div>
                        <div className="experience-partner"><h2>Banque Degroof Petercam</h2></div>
                        <div className="experience-description"><h3>🇱🇺 Luxembourg</h3></div>
                    </div>
                </div>
            </div>

        </StyledExperiencesSection>
    );
};

export default Experiences;
