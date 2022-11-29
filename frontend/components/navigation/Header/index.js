import {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {t} from "i18next";
import {StyledHeader} from "./styles";
import OpenMenu from "../../../public/images/open-menu.svg"
import CloseMenu from "../../../public/images/close-menu.svg"

const Header = () => {
    const [variant, setVariant] = useState("underline");
    const [activeColor, setActiveColor] = useState("primary");
    const [menuBurgerOpen, setMenuBurgerOpen] = useState(null)
    const [menuBurgerClose, setMenuBurgerClose] = useState(null)
    const [navLinks, setNavLinks] = useState(null)

    const navigationArrayKey = ["home",
        "about-me",
        "experiences",
        "skills",
        "partners",
        "education",
        "my-portfolio",
        "contact"];

    // const divAnimation = anime({
    //     targets: 'header',
    //     backgroundColor: '#000',
    //     elasticity: 200,
    //     easing: 'easeInOutCubic',
    //     autoplay: false,
    //     opacity: 0.7
    // });
    const scrollPercent = () => {
        const bodyST = document.body.scrollTop;
        const docST = document.documentElement.scrollTop;
        const docSH = document.documentElement.scrollHeight;
        const docCH = document.documentElement.clientHeight;


        return (docST + bodyST) / (docSH - docCH) * 100
    }

    window.onscroll = () => {
        // divAnimation.seek((scrollPercent() / 100) * divAnimation.duration);
    };

    const parentVariant = {
        initial: {opacity: 1},
        animate: {opacity: 1, transition: {staggerChildren: 0.12}}
    }
    const childrenVariant = {
        initial: {opacity: 0, y: '10px'},
        animate: {opacity: 1, y: 0}
    }

    const toggleMenu = () => {
        navLinks.classList.toggle("mobile-menu")
        menuBurgerOpen.classList.toggle("burger-icon-none")
        menuBurgerClose.classList.toggle("burger-icon-none")
    }

    useEffect(() => {
        setNavLinks(document.querySelector(".nav-links"))
        setMenuBurgerOpen(document.querySelector(".burger-icon"))
        setMenuBurgerClose(document.querySelector(".burger-icon-close"))
    }, []);

    return (
        <StyledHeader>
            <header className="header">
                <a href="#" className="logo">alexisdetrie.dev</a>
                <motion.nav className="navbar" initial="initial" animate="animate" variants={parentVariant}>
                    <div className="nav-links">
                        <ul>
                            <li key="toto" className="active"><a href="#start" className="nav-link">Home</a></li>
                            {
                                navigationArrayKey.map((item, index) => {
                                    return <li
                                        key={item}
                                    >
                                        <a href={"#" + item} className="nav-link"
                                           onClick={toggleMenu}
                                        >{t("navbar." + item)}</a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <OpenMenu src="/public/images/open-menu.svg" alt="menu-mobile" className="burger-icon"
                                  onClick={toggleMenu}/>
                        <CloseMenu src="/public/images/close-menu.svg" alt="menu-mobile"
                                   className="burger-icon-close burger-icon-none" onClick={toggleMenu}/>
                    </div>
                </motion.nav>
            </header>
        </StyledHeader>
    );


};

export default Header;
