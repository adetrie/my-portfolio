import {useEffect, useRef} from 'react';
import {StyledStartSection} from "./styles";

const Start = () => {

    const startSectionRef = useRef(null);


    useEffect(() => {
            console.log("here:" + startSectionRef.current.style.paddingTop)
            // startSectionRef.current.style.paddingTop = "1000px"
    }, []);

    return (
        <StyledStartSection id={"home"} ref={startSectionRef}>
            Home
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </StyledStartSection>
    );
};

export default Start;
