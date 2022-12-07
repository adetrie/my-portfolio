import {useEffect, useLayoutEffect, useRef} from 'react';
import {StyledStartSection} from "./styles";
import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const Start = () => {

    const root = useRef(null);

    //     const animSectionStart = gsap.to(document.getElementById(".architect"), {
    //         left: "1000px",
    //         backgroundColor: "red",
    //         duration: 3
    //     })
    // ScrollTrigger.create({
    //     trigger: document.querySelector(".architect"),
    //     animation: animSectionStart,
    //     toggleActions: "play complete play reverse",
    //     onToggle: self => console.log("toggled, isActive:", self.isActive),
    // });

    useEffect(() => {
        const animHeaderSectionExperience = gsap.timeline().to(".architect", {width: "100%", duration: .7})
        // ScrollTrigger.create({
        //     trigger: document.querySelector(".experiences"),
        //     animation: animHeaderSectionExperience,
        //     toggleActions: "play complete play reverse"
        // });
    }, []);


    return (
        <StyledStartSection id="home" ref={root}>
            <div className="architect">
                <div className="description-ad">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda
                    ullam numquam voluptate quidem autem, libero iure quaerat non doloribus odio, sint
                    incidunt!
                    Adipisci possimus reprehenderit omnis eos quod ea provident.
                </div>
            </div>
            <div className="developer">
                <div className="description-ad">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda
                    ullam numquam voluptate quidem autem, libero iure quaerat non doloribus odio, sint
                    incidunt!
                    Adipisci possimus reprehenderit omnis eos quod ea provident.
                </div>
            </div>
        </StyledStartSection>
    );
};

export default Start;
