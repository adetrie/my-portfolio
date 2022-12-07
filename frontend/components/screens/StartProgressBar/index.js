import React, {useEffect, useRef, useState} from 'react';
import {StyledLoader} from "./styles";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/lottie/lottieflow-loading.json";
import {motion} from "framer-motion";
import {gsap} from "gsap/dist/gsap";
import {GlobalStyles} from "../../../styles/GlobalStyles";
import Logo from "../../../public/images/logo.svg"
import SplitType from "split-type";

const StartProgressBar = ({progress, finishCallback}) => {

    useEffect(() => {
        console.log("useffectChild")
        gsap.to(document.querySelector(".loading-bar"), {
            duration: .5,
            left: (-100 + progress) + "vw",
            onComplete: args => {
                if (progress >= 100) {
                    gsap.to(document.querySelector(".logo-container"), {
                        duration: .7,
                        opacity: 0,
                        onComplete: args => {
                            setTimeout(() => {

                            finishCallback()
                            }, 500)
                        }
                    })
                }
            }
        })


        // .to(document.querySelector(".char"), {
        //     y: 100,
        //     stagger: 0.05,
        //     delay: .2,
        //     duration: .1,
        // })

        // const logoSentence = new SplitType(".logo-sentence");

        // onAnimationComplete={() => stopAnimation(true)
    }, [progress]);

    return (

        <StyledLoader>
            <div className="loading-bar"></div>
            <div className="logo-container">
                <h1 className="logo-sentence">alexisdetrie.dev</h1>
                <h2 className="logo-sentence">{progress} %</h2>
            </div>
        </StyledLoader>
    );
};

export default StartProgressBar;
