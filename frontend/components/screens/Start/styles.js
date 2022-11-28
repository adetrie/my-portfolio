import styled from 'styled-components';

export const StyledStartSection = styled.section`
  display: flex;
  flex-direction: row;
  align-content: space-around;
  background-color: red;

  .architect {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: min(12vh, 100%) 20px 0 10px;
    background-color: #75c9b7;
  }

  .developer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: min(12vh, 100%) 20px 0 10px;
    background-color: #ffe26a;
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