import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {t} from "i18next";
import {StyledHeader} from "./styles";
import OpenMenu from "../../../public/images/open-menu.svg"
import CloseMenu from "../../../public/images/close-menu.svg"
import Logo from "../../../public/images/logo.svg"
import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const [activeColor, setActiveColor] = useState("primary");
    const [menuBurgerOpen, setMenuBurgerOpen] = useState(null)
    const [menuBurgerClose, setMenuBurgerClose] = useState(null)
    const [navLinks, setNavLinks] = useState(null)
    const header = useRef(null);

    const navigationArrayKey = [
        "experiences",
        "skills",
        "partners",
        "education",
        "my-portfolio",
        "contact"];

    const toggleMenu = () => {
        navLinks.classList.toggle("mobile-menu")
        menuBurgerOpen.classList.toggle("burger-icon-none")
        menuBurgerClose.classList.toggle("burger-icon-none")
    }

    useEffect(() => {
        setNavLinks(document.querySelector(".nav-links"))
        setMenuBurgerOpen(document.querySelector(".burger-icon"))
        setMenuBurgerClose(document.querySelector(".burger-icon-close"))

        const animHeaderSectionExperience = gsap.to(header.current, {boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", scrub: 1})
        ScrollTrigger.create({
            trigger: document.querySelector(".experiences"),
            animation: animHeaderSectionExperience,
            toggleActions: "play complete play reverse"
        });

    }, []);




    return (
        <StyledHeader>
            <header id="header" className="header" ref={header}>
                <Logo className="logo"></Logo>
                <nav className="navbar">
                    <div className="nav-links">
                        <ul>
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
                    <div className="toggle-menu">
                        <OpenMenu src="/public/images/open-menu.svg" alt="menu-mobile" className="burger-icon"
                                  onClick={toggleMenu}/>
                        <CloseMenu src="/public/images/close-menu.svg" alt="menu-mobile"
                                   className="burger-icon-close burger-icon-none" onClick={toggleMenu}/>
                    </div>
                </nav>
            </header>
        </StyledHeader>
    );
};

export default Header;
