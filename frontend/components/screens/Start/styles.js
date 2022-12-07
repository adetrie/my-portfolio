import styled from 'styled-components';
import {GlobalStyles} from "../../../styles/GlobalStyles";

export const StyledStartSection = styled.section`
  display: flex;
  flex-direction: row;
  align-content: space-around;
  min-height: 100vh;

  .architect {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: min(12vh, 100%) 20px 0 10px;
    background-color: ${GlobalStyles.colors.green};
    min-height: 100vh;
    justify-content: center;
    color: ${GlobalStyles.colors.white};
    width: 0;
  }

  .developer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: min(12vh, 100%) 20px 0 10px;
    background-color: ${GlobalStyles.colors.white};
    min-height: 100vh;
    justify-content: center;
    color: ${GlobalStyles.colors.fontGrey};
  }

  .description-ad {
    margin: 20px 0;
    padding: 20px 20px;
    text-align: center;
  }

  @media (max-width: 1050px) {
    flex-direction: column;
    .architect {
    }

    .developer {
    }

    .description-ad {
    }
  }
`;