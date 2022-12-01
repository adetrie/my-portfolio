import styled from 'styled-components';

export const StyledHeader = styled.div`
  header {
    position: fixed;
    height: 10vh;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.125);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 100;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  header-experiences {
    position: fixed;
    height: 10vh;
    width: 100%;
    background-color: #16123f;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 100;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .logo {
    color: white;
    font-size: 1.3em;
    padding: 0 0 0 15px;
  }

  .navbar {
  }

  .navbar a {
    color: white;
  }

  .navbar .nav-links ul {
    display: flex;
  }

  .navbar .nav-links ul li {
    margin: 0 10px;
  }

  .navbar .nav-links ul li.active a {
    color: #ffe26a;
    text-decoration: underline;
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
    color: white;
    font-size: 1.6em;
    padding: 0 0 0 15px;
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
    color: #75c9b7;
  }

  .navbar .nav-links ul li {
    margin: 10px 0;
    padding: 10px;
  }

  .navbar .nav-links ul li a {
    color: #16123f;
    font-size: 1.1em;
    transition: all .1s ease-in;
  }

  .navbar .nav-links ul li a:hover {
    color: #16123f;
    font-size: 1.2em;
    text-decoration: underline;
    transition: all .1s ease-in;
  }


  .navbar .nav-links ul li.active a {
    color: #75c9b7;
    text-decoration: underline;
    font-size: 1.3em;
  }

  .navbar .nav-links ul li.active a:hover {
    color: #75c9b7;
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