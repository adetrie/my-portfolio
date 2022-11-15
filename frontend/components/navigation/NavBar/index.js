import {useEffect, useState} from 'react';
import {Button, Navbar, Spacer, Text} from "@nextui-org/react";
import {motion} from "framer-motion";
import {t} from "i18next";

const NavBar = () => {
    const [variant, setVariant] = useState("underline");
    const [activeColor, setActiveColor] = useState("primary");

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
                <Text b color="inherit" hideIn="xs">{t('common.alexisdetrie-dev')}</Text>
            </Navbar.Brand>
            <motion.div initial="initial" animate="animate" variants={parentVariant}>
                <Navbar.Content activeColor={activeColor} hideIn="xs" variants={variant}>
                    {
                        navigationArrayKey.map((item) => {
                            return <NavBarItem text={t("navbar." + item)} link={"#" + item} isActive={false}/>
                        })
                    }
                </Navbar.Content>
            </motion.div>
        </Navbar>
    );

    function NavBarItem({text, link, isActive}) {
        return <Navbar.Link isActive={isActive} href={link}>
            <motion.span className="child" variants={childrenVariant}>
                {text}
            </motion.span>
        </Navbar.Link>
    }
};


export default NavBar;
