import styled from 'styled-components';
import {GlobalStyles} from "../../../styles/GlobalStyles";

export const StyledHeader = styled.div`
  header {
    position: fixed;
    height: 10vh;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.125);
    z-index: 100;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    min-height: 60px;
  }
  .logo {
    margin-left: 50px;
    height: 8vh;
    width: 8vw;
  }
  .toggle-menu {
    min-width: 170px;
    max-width: 230px;
  }

  .navbar {
    display: block;
    padding-right: 25px;
  }

  .navbar a {
    color: ${GlobalStyles.colors.fontGrey};
  }

  .navbar .nav-links ul {
    display: flex;
  }

  .navbar .nav-links ul li {
    margin: 0 10px;
  }

  .navbar .nav-links ul li.active a {
    color: ${GlobalStyles.colors.yellow};
    text-decoration: underline;
    animation-delay: 0.6s;
    -webkit-animation-fill-mode: forwards;

    &:first-child{
      animation-delay: 0.7s;

    }

    &:last-child{
      color: ${GlobalStyles.colors.darkBlue};
      animation-delay: 0.5s;
    }
  }


  h1 span{
  }


  .burger-icon-close {
    display: none;
  }

  .burger-icon {
    display: none;
  }
}

@media (max-width: 1050px) {

  .logo {
    display: block;
    min-width: 170px;
    max-width: 230px;
  }

  .nav-links {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(7px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -100%;
    transition: all 0.5s ease-in-out;
  }

  .nav-links ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    color: ${GlobalStyles.colors.lightGreen};
  }

  .navbar .nav-links ul li {
    margin: 10px 0;
    padding: 10px;
  }

  .navbar .nav-links ul li a {
    color: ${GlobalStyles.colors.darkBlue};
    font-size: 1.1em;
    transition: all .1s ease-in;
  }

  .navbar .nav-links ul li a:hover {
    color: ${GlobalStyles.colors.darkBlue};
    font-size: 1.2em;
    text-decoration: underline;
    transition: all .1s ease-in;
  }


  .navbar .nav-links ul li.active a {
    color: ${GlobalStyles.colors.lightGreen};
    text-decoration: underline;
    font-size: 1.3em;
  }

  .navbar .nav-links ul li.active a:hover {
    color: #${GlobalStyles.colors.lightGreen};
    text-decoration: underline;
    font-size: 1.4em;
  }

  .mobile-menu {
    margin-left: 0;
  }

  .burger-icon-none {
    display: none !important;
  }

  .burger-icon {
    display: block;
    position: absolute;
    right: 20px;
    margin-top: -10px;
    filter: invert(99%) sepia(5%) saturate(170%) hue-rotate(157deg) brightness(120%) contrast(100%);
  }

  .burger-icon-close {
    display: block;
    position: absolute;
    right: 20px;
    margin-top: -10px;
    filter: invert(99%) sepia(5%) saturate(170%) hue-rotate(157deg) brightness(120%) contrast(100%);
  }
}

`;