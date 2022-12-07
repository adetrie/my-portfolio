import styled from 'styled-components';
import {GlobalStyles} from "../../../styles/GlobalStyles";

export const StyledExperiencesSection = styled.section`
  box-shadow: inset 2px 15px 15px -13px #000000;
  background-color: ${GlobalStyles.colors.yellow};

  .experience-grid {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    grid-template-rows: repeat(6 1fr);
    justify-self: stretch;
  }

  .experience-grid > h1 {
    font-size: 2em;
    color: ${GlobalStyles.colors.white};
    margin: 90px 0 70px 40px;
  }

  .experience-item > div > h2 {
    font-size: 1.2em;
    color: ${GlobalStyles.colors.white};
    margin: 10px 10px 20px 10px;
  }

  .experience-item > div > h3 {
    font-size: 1em;
    color: ${GlobalStyles.colors.white};
    margin: 10px 10px 20px 10px;
  }

  .experience-item {
    backdrop-filter: blur(7px);
    border: 1px solid ${GlobalStyles.colors.white};
    background-color: #ffffff10;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    display: grid;
    grid-template-columns: 50px repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .experience-item:before{
    content: '';
    position: absolute;
    border-left: 1px solid ${GlobalStyles.colors.yellow};
    transform: rotate(90deg);
    height: 25px;
    top: 50%;
  } 
  .experience-item-right:before{
    left: -15px;
  }
  .experience-item-left:before{
    right: -15px;
  }

  .experience-item-empty {
  }

  .experience-item-delimiter {
    background-color: ${GlobalStyles.colors.yellow};
  }

  .experience-item-right {
    border-radius: 0px 10px 10px 0px;
    margin: 10px 30px 10px 25px;
  }

  .experience-item-left {
    border-radius: 10px 0px 0px 10px;
    margin: 10px 25px 10px 30px;
  }

  .experience-mobile-content {
    display: none;
  }

  .experience-function {
    grid-area: 1 / 1 / 3 / 2;
    writing-mode: vertical-lr;
    text-orientation: revert;
  }

  .experience-partner {
    grid-area: 1 / 2 / 2 / 3;
  }

  .experience-description {
    grid-area: 2 / 2 / 3 / 3;
  }

  @media (max-width: 1050px) {
    .experience-grid {
      position: relative;
      display: grid;
      grid-template-columns: 2px 1fr;
      grid-template-rows: repeat(6 1fr);
      justify-self: stretch;
    }

    .experience-mobile-content {
      display: block;
    }

    .display-none-onmobile {
      display: none;
    }

    .experience-item {
    }

    .experience-item-empty {
    }

    .experience-item-delimiter {
      background-color: ${GlobalStyles.colors.yellow};
    }
    .experience-mobile-content > h1 {
      font-size: 2em;
      color: ${GlobalStyles.colors.white};
      margin: 90px 0 70px 40px;
    }
    
  }
`;