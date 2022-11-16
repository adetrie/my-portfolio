import {useEffect, useRef, useState} from 'react';
import {Link, Navbar, Text} from "@nextui-org/react";
import {motion} from "framer-motion";
import {t} from "i18next";

const NavBar = () => {
    const [variant, setVariant] = useState("underline");
    const [activeColor, setActiveColor] = useState("primary");
    const toggleNavbar = useRef(null);

    const navigationArrayKey = ["home",
        "about-me",
        "experiences",
        "skills",
        "partners",
        "education",
        "my-portfolio",
        "contact"];

    const parentVariant = {
        initial: {opacity: 1},
        animate: {opacity: 1, transition: {staggerChildren: 0.12}}
    }
    const childrenVariant = {
        initial: {opacity: 0, y: '10px'},
        animate: {opacity: 1, y: 0}
    }

    useEffect(() => {
    }, []);

    return (
        <Navbar isBordered={false} variant="sticky" css={"display: block"}>
            <Navbar.Brand>
                <Text b color="inherit">{t('common.alexisdetrie-dev')}</Text>
            </Navbar.Brand>

            <motion.div initial="initial" animate="animate" variants={parentVariant}>
                <Navbar.Content activeColor={activeColor} hideIn="sm" variants={variant}>
                    {
                        navigationArrayKey.map((item) => {
                            return <NavBarItemLarge text={t("navbar." + item)} link={"#" + item} isActive={false}
                                                    key={item}/>
                        })
                    }
                </Navbar.Content>
            </motion.div>

            <Navbar.Toggle aria-label="toggle navigation" showIn="sm" ref={toggleNavbar}/>
            <Navbar.Collapse>
                {
                    navigationArrayKey.map((item) => {
                        return <NavBarItemSmall text={t("navbar." + item)} link={"#" + item} key={item}/>
                    })
                }
            </Navbar.Collapse>
        </Navbar>
    );


    function NavBarItemLarge({text, link, isActive}) {
        return <Navbar.Link isActive={isActive} href={link}>
            <motion.span className="child" variants={childrenVariant}>
                {text}
            </motion.span>
        </Navbar.Link>
    }

    function NavBarItemSmall({text, link}) {
        return <Navbar.CollapseItem key={text}>
                <Link
                    color="inherit"
                    css={{minWidth: "100%",}}
                    href={link}
                    onPress={()=> toggleNavbar.current.click()}

                >
                    {text}
                </Link>
            </Navbar.CollapseItem>
    }

};


export default NavBar;
