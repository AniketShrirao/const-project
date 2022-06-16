import styled from 'styled-components';
import theme from '../../../themes';

export const StyledButton = styled.button`
  font-size: 18px;
  margin: 10px;
  background: transparent;
  font-weight: 100;
  font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD}, sans-serif;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  letter-spacing: 1px;
`;

export const StyledApplyButton = styled(StyledButton)`
  padding: 10px 11%;
  border: none;
  background-color: ${theme.colors.PRIMARY_COLOR};
  color: ${(props) => props.theme.colors.WHITE};
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${theme.colors.PRIMARY_COLOR};
    color: ${theme.colors.PRIMARY_COLOR};
    background-color: ${(props) => props.theme.colors.WHITE};
  }
`;

export const StyledResetButton = styled(StyledButton)`
  padding: 10px 6%;
  border: 1px solid ${theme.colors.PRIMARY_COLOR};
  color: ${theme.colors.PRIMARY_COLOR};

  &:hover {
    background-color: ${theme.colors.PRIMARY_COLOR};
    color: ${(props) => props.theme.colors.WHITE};
  }
`;

export const StyledRankResetButton = styled(StyledResetButton)`
  position: absolute;
  padding: 7px 5% 5px 2%;
  right: -60%;
  font-size: 18px;
  border: none;
  background-color: ${(props) => props.theme.colors.WHITE};
  color: ${theme.colors.PRIMARY_COLOR};
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2));
  top: -6px;

  &:hover {
    background-color: ${theme.colors.PRIMARY_COLOR};
    color: ${(props) => props.theme.colors.WHITE};

    & svg {
      color: ${(props) => props.theme.colors.WHITE};
      path {
        fill: ${theme.colors.WHITE};
      }
    }
  }

  & svg {
    color: ${theme.colors.PRIMARY_COLOR};
    font-size: 13px;
    position: absolute;
    top: 6px;
    right: 9%;
  }

  @media screen and (max-width: 1023px) {
    right: 0%;
    top: 125px;
    font-size: 17px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
    padding: 6px 10% 6px 3%;
    right: 0%;
    font-size: 16px;

    & svg {
      top: 5px;
      right: 10%;
    }
  }
`;

export const StyledCountryButton = styled(StyledButton)`
  padding: 10px 1%;
  border: none;
  margin: 50px 1%;
  background-color: rgba(255, 255, 255, 0.8);
  color: ${(props) => props.theme.colors.PRIMARY_COLOR};
  border: 1px solid transparent;
  width: 21.5%;
  text-align: left;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  filter: drop-shadow(0px 2px 4px ${(props) => props.theme.colors.DROP_SHADOW});

  @media screen and (max-width: ${(props) => props.theme.breakpoints[4]}) {
    width: 25%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
    width: 28%;
    margin: 50px 5% 50px 10%;
    font-size: 17px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
    padding: 10px 2%;
    width: 25%;
  }
`;
