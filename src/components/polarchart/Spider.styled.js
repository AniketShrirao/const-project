import styled from 'styled-components';

export const SpiderDiagContainer = styled.div`
  background-color: ${(props) => props.theme.colors.BACKGROUND_COLOR};
  .highcharts-background {
    fill: ${(props) => props.theme.colors.BACKGROUND_COLOR};
  }

  h5 {
    display: flex;
    justify-content: center;
    margin: 0 0 25px;
    font-size: 14px;
    opacity: 0.6;
    font-family: ${(props) => props.theme.fonts.ROBOTO_REGULAR};
    text-align: center;
  }

  .highcharts-axis-line {
    fill: none;
    stroke: #ccd6eb00;
  }

  .spider-first-score,
  .spider-second-score {
    fill: ${(props) => props.theme.colors.PRIMARY_COLOR};
    font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD};
    font-size: 20px;
  }

  .spider-score-divider {
    font-size: 18px;
  }

  .spider-second-score {
    fill: ${(props) => props.theme.colors.TERTIARY_COLOR};
  }
  .spider-label {
    font-family: ${(props) => props.theme.fonts.ROBOTO_REGULAR};
    fill: ${(props) => props.theme.colors.BLACK};
    transform: translate(-10px, -10px);
  }

  .reset {
    padding: 0.6%;
    right: 20%;
    top: 37.5%;
    pointer-events: none;

    @media only screen and (min-width: 1360px) and (max-width: 1600px) {
      padding: 0.6%;
      right: 22%;
      top: 36%;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints[4]}) {
      padding: 0.8%;
      right: 16%;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
      right: 13%;
      padding: 1.2%;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
      right: 10%;
      padding: 1.5%;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints[1]}) {
      right: 7%;
      padding: 1.8%;
    }

    @media screen and (max-width: 400px) {
      right: 4%;
      padding: 2%;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
      right: 5%;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
    .spider-first-score,
    .spider-second-score {
      font-size: 14px !important;
    }
  }
`;

export const StyledSpiderFilter = styled.div`
  display: flex;
  background-color: #e8e9ea;
  justify-content: center;
  align-items: center;
  position: relative;

  .enable-reset {
    background: ${(props) => props.theme.colors.WHITE};
    color: ${(props) => props.theme.colors.PRIMARY_COLOR};
    opacity: 100% !important;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.DROP_SHADOW};
    filter: drop-shadow(
      0px 2px 4px ${(props) => props.theme.colors.DROP_SHADOW}
    );
    pointer-events: all !important;

    &:hover {
      background: ${(props) => props.theme.colors.PRIMARY_COLOR};
      color: ${(props) => props.theme.colors.WHITE};
      box-shadow: 2px 2px 12px ${(props) => props.theme.colors.PRIMARY_COLOR};
      opacity: 1;
      border-color: transparent;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
    justify-content: flex-start;
  }
`;

export const VersusHeading = styled.h2`
  font-size: 28px;
  opacity: 0.3;
  font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD}, sans-serif;
`;

export const OverlayStrip = styled.div`
  margin: 0 50%;
  width: 40%;
  height: 12%;
  position: absolute;
  content: '';
  z-index: 1;
  display: none;

  @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
    margin: 0 51%;
    display: block;
    width: 30%;
    height: 33%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[1]}) {
    margin: 0 52%;
    width: 32%;
    height: 33%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
    margin: 0 51%;
    width: 34%;
    height: 31%;
  }
`;
