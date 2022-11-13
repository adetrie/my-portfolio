import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {StyledLoader} from "./styles";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/lottie/lottieflow-loading.json";
import {motion} from "framer-motion";

const Loader = () => {

    const variant = {
        hidden: {
            opacity: 0,
            scale: 0.5,
            transition: {
                duration: 0.8,
                delay: 0.5,
            }
        }
    }

    useEffect(() => {
    }, []);

    return (

        <StyledLoader as={motion.div} exit="hidden"
                      variants={variant}>
            <motion.div
                exit="hidden"
                variants={variant}
            >
                <Lottie animationData={groovyWalkAnimation}/>
            </motion.div>

        </StyledLoader>
    );
};

export default Loader;
