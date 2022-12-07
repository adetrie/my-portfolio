import styled from 'styled-components';
import {GlobalStyles} from "../../../styles/GlobalStyles";

export const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: white;

  .char {
    transform: translateY(115px);
    transition: transform .5s;
  }

  .loading-bar {
    background-color: ${GlobalStyles.colors.green};
    position: absolute;
    top: 0;
    left: -100vw;
    width: 100vw;
    height: 100vh;
  }

  .logo-container {
    background-color: ${GlobalStyles.colors.yellow};
    position: relative;
    display: grid;
    place-content: center;
    z-index: 105;
    color: ${GlobalStyles.colors.white};
    height: 200px;
    height: 100px;
    padding: 20px;
  }

  .logo-sentence {
    text-align: center;
  }

  .test {
    z-index: 1000;
    position: absolute;
    top: 0;
    right: -100px;
    height: 500px;
    width: 500px;
  }

`;
