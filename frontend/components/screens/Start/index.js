import {useEffect, useRef} from 'react';
import {StyledStartSection} from "./styles";

const Start = () => {

    const startSectionRef = useRef(null);


    useEffect(() => {
    }, []);


    return (
        <StyledStartSection id="home" ref={startSectionRef}>
            <div className="architect">
                <img src="https://via.placeholder.com/400x600.png"/>
                <div className="description-ad">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda
                    ullam numquam voluptate quidem autem, libero iure quaerat non doloribus odio, sint
                    incidunt!
                    Adipisci possimus reprehenderit omnis eos quod ea provident.
                </div>
            </div>
            <div className="developer">
                <img src="https://via.placeholder.com/400x600.png"/>
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
