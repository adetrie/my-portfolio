import {useEffect} from 'react';
import {StyledNavigationScroller} from "./styles";
import {useScroll, useSpring} from "framer-motion";

const NavgationScroller = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
    }, []);

    return (
        <StyledNavigationScroller style={{ scaleX }}/>
    );

};


export default NavgationScroller;
