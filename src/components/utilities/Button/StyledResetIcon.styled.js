import styled from 'styled-components';
import theme from '../../../themes';

const StyledResetIcon = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  padding: 8px 1.3%;
  right: -6%;
  top: 35.5%;
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD};
  opacity: 20%;
  transition: all 0.3s ease;
  border-radius: 50%;
  border: 1px solid;

  @media only screen and (min-width: 1360px) and (max-width: 1600px) {
    padding: 11px 1.4%;
    right: -6%;
    top: 35.2%;
  }

  & .reset-text {
    position: absolute;
    top: -16px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.PRIMARY_COLOR};
  }

  @media screen and (max-width: ${theme.breakpoints[3]}) {
    padding: 1.5%;
    right: -8%;
  }
`;

export default StyledResetIcon;
