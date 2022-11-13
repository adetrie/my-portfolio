import {useEffect, useState} from 'react';
import {Button, Navbar, Spacer, Text} from "@nextui-org/react";
import {motion} from "framer-motion";
import {t} from "i18next";

const NavBar = () => {
    const [variant, setVariant] = useState("underline");
    const [activeColor, setActiveColor] = useState("primary");

    const navigationArrayKey = ["home",
        "about-me",
        "my-xp",
        "skills",
        "worked-with-me",
        "eduction",
        "how-this-website-work",
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
        <motion.div initial="initial" animate="animate" variants={parentVariant}>
            <Navbar isBordered={true} variant="sticky">

                <Navbar.Brand>
                    <Text b color="inherit" hideIn="xs">{t('common.alexisdetrie-dev')}</Text>
                </Navbar.Brand>
                <Navbar.Content activeColor={activeColor} hideIn="xs" variants={variant}>
                    {
                        navigationArrayKey.map((item) => {
                            return <NavBarItem text={t("navbar." + item)}/>
                        })
                    }
                </Navbar.Content>
            </Navbar>
        </motion.div>
    );

    function NavBarItem({text}) {
        return <Navbar.Link href="#">
            <motion.span className="child" variants={childrenVariant}>
                {text}
            </motion.span>
        </Navbar.Link>
    }
};


export default NavBar;
