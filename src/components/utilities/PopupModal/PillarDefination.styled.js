import styled from 'styled-components';

export const StyledPillarDefination = styled.div`
  max-width: 93.5%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 20px 0px;

  p {
    font-size: 14px;
    line-height: 1.2;
    font-family: ${(props) => props.theme.fonts.ROBOTO_REGULAR};
  }
`;

export const StyledPillarDefHeading = styled.h3`
  font-size: 20px;
  margin: 10px 0;
  display: flex;
  align-self: flex-start;
  font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD};
`;
