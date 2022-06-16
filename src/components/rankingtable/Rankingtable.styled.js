import styled from 'styled-components';

export const RankingTableSection = styled.div`
  padding: 50px 0;

  .wrapper {
    position: relative;
    overflow-x: clip;
  }

  .ag-root-wrapper {
    border: none !important;
    border-top: 1px solid
      ${(props) => props.theme.colors.RANK_TABLE_HEADER_BORDER} !important;
  }

  .heading {
    .wrapper {
      width: 100%;
      @media screen and (max-width: 995px) {
        width: 90%;
      }
    }

    h1 {
      padding: 5px 0 0;
    }
  }

  .ranking-table-info {
    padding: 10px 0 40px;
    line-height: 1.2;
    font-family: ${(props) => props.theme.fonts.ROBOTO_REGULAR};
    opacity: 0.8;

    @media screen and (max-width: 995px) {
      padding: 10px 5% 40px;
    }
  }

  .ag-center-cols-clipper {
    min-height: 40px !important;
  }

  /* error message above filters */
  .error-message {
    position: absolute;
    top: -32px;
    left: 2%;
    color: ${(props) => props.theme.colors.TERTIARY_COLOR};
    font-size: 14px;
    font-family: ${(props) => props.theme.fonts.ROBOTO_REGULAR};
    line-height: 1.2;

    @media screen and (min-width: 1360px) {
      top: -30px;
      left: 0;
    }

    @media screen and (min-width: ${(props) => props.theme.breakpoints[4]}) {
      top: -30px;
      left: 2%;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
      top: -23px;
      left: 5%;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints[1]}) {
      top: -30px;
      left: 5%;
    }
  }

  /* ag-grid table max height */
  .ag-root-wrapper-body,
  .ag-root-wrapper-body,
  #myGrid {
    height: auto !important;
    max-height: 440px;
  }

  /* single row height */
  .ag-header-row {
    height: 100% !important;
  }

  /* header of table */
  .ag-body-viewport {
    overflow-y: scroll;
  }

  .ag-body-viewport::-webkit-scrollbar {
    width: 4px;
  }

  .ag-center-cols-viewport {
    overflow-x: hidden;
  }

  /* header columns */
  ._3000 {
    .customSubHeaderLabel {
      width: 90% !important;
    }
  }

  ._4000 {
    .customSubHeaderLabel {
      width: 90% !important;
    }
  }

  ._5000 {
    .customSubHeaderLabel {
      width: 90% !important;
    }
  }

  .total,
  .country,
  ._1000,
  ._2000,
  ._3000,
  ._4000,
  ._5000 {
    color: ${(props) => props.theme.colors.RANK_TABLE_HEADER_COLOR};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[4]}) {
    ._1000 .ag-header-cell-text,
    ._2000 .ag-header-cell-text,
    ._3000 .ag-header-cell-text,
    ._4000 .ag-header-cell-text,
    ._5000 .ag-header-cell-text {
      font-size: 10.5px;
    }
  }
  .ag-header-row-column {
    top: 0 !important;
  }

  .customExpandButton {
    z-index: 1;
    display: flex;
    justify-content: space-between;
    width: 25px;
    position: absolute;
    bottom: -19px;
    left: 45%;
    cursor: pointer;

    & svg path {
      fill: ${(props) => props.theme.colors.RANK_TABLE_SVG_COLOR};
    }
  }

  .ag-header {
    height: 20px !important;
    min-height: 20px !important;
    background: transparent !important;
    border-color: ${(props) =>
      props.theme.colors.RANK_TABLE_HEADER_BORDER} !important;
  }

  .ag-body-horizontal-scroll {
    display: none;
  }

  .ag-header-cell-text {
    width: 80%;
    padding: 8px 0;
    position: absolute;
    white-space: pre-wrap;
    bottom: 5px;
    left: 5px;
    font-family: ${(props) => props.theme.fonts.ROBOTO_BOLD};
    font-weight: 500;
    font-size: 14px;
    z-index: 1;
  }

  .sub-pillars-headers {
    bottom: 92px !important;
    -ms-transform: rotate(-40deg);
    transform: rotate(-69deg);
    width: 200px !important;

    & .ag-header-icon {
      position: absolute;
      bottom: 40px;
      left: -27px;
      transform: rotate(69deg);
    }

    & .ag-header-cell-text {
      bottom: 35px;
      left: 10px;
    }
  }

  .ag-grid-total,
  .ag-grid-country-names {
    width: 100% !important;
    padding: 0 17px !important;
  }

  .ag-grid-country-names {
    transition: all 0.1s ease;

    @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
      word-break: break-word;
      white-space: pre-wrap;
      line-height: 18px;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 80%;
    }

    &:hover {
      color: ${(props) => props.theme.colors.TERTIARY_COLOR};
      font-weight: 700;
    }
  }

  .ag-header-cell-sorted-asc,
  .ag-header-cell-sorted-desc {
    width: 50%;
  }

  .ag-header-icon {
    position: absolute;
    bottom: -20px;
    left: 0;
  }

  .ag-header-group-cell {
    justify-content: center;
  }

  .ag-header-row-column {
    z-index: -1;
  }

  .ag-header-row-column-group {
    white-space: pre-wrap;
    overflow: visible;
    z-index: 1;
  }

  div[role='columnheader'] {
    bottom: 20px;
    border: none !important;
  }

  .ag-header-cell-sortable .ag-header-cell-label {
    justify-content: flex-start;
  }

  .grid-cell-centered {
    text-align: center;
  }

  .ag-row {
    height: 43px !important;
    border: 1px solid ${(props) => props.theme.colors.RANK_TABLE_BORDER_COLOR};
  }

  .ag-cell {
    font-family: ${(props) => props.theme.fonts.ROBOTO_REGULAR};
  }

  .ag-cell-focus {
    border: none !important;
    outline: none;
  }

  .ag-theme-alpine .ag-ltr .ag-cell {
    padding: 0;
  }

  .bg-overlay {
    position: absolute;
    width: 100.7%;
    bottom: -9px;
    left: -4px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    img {
      width: 100%;
    }
  }

  .ag-sort-descending-icon,
  .ag-sort-ascending-icon {
    color: ${(props) => props.theme.colors.RANK_TABLE_SVG_COLOR} !important;
    font-size: 14px;
  }

  .ag-root-wrapper,
  .ag-root,
  .ag-header-viewport,
  .ag-header,
  .ag-header-container,
  .ag-header-row-column,
  .ag-cell-label-container,
  .ag-header-cell,
  .ag-header-cell-label {
    overflow: visible !important;
  }
`;

export const RankFilterSection = styled.div`
  margin: 0 0 70px;
  display: flex;
  width: 62%;
  position: relative;

  .custom-dropdown-wrapper {
    margin: 0 2% 50px;
  }

  .custom-dropdown-wrapper:first-of-type {
    @media screen and (min-width: ${(props) => props.theme.breakpoints[4]}) {
      margin-left: 0;
    }
  }

  .custom-select__value-container {
    padding: 8px 16px;
  }

  .custom-select__single-value,
  .kWtwke .custom-select__placeholder {
    color: ${(props) => props.theme.colors.PRIMARY_COLOR};
  }

  @media screen and (max-width: 1023px) {
    width: 96%;
    flex-direction: column;
    margin: 0 0 120px;

    .custom-dropdown-wrapper {
      margin: 10px 5%;
      width: 93%;
    }

    .custom-select__control {
      max-width: 100%;
    }
  }
`;

export const RankScoreToggle = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.WHITE};
  border-radius: 44px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.DROP_SHADOW};
  padding: 6px 3%;
  width: 20%;
  position: absolute;
  bottom: -12px;
  left: 2%;
  text-align: right;
  font-size: 16px;
  color: ${(props) => props.theme.colors.PRIMARY_COLOR};
  font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD};
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2));

  &:focus,
  &:active {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  & span:first-of-type,
  & span:last-of-type {
    z-index: 1;
  }

  & span:first-of-type {
    color: ${(props) => props.theme.colors.WHITE};
  }

  .pin {
    background-color: ${(props) => props.theme.colors.PRIMARY_COLOR};
    padding: 13.9px 0;
    left: 0px;
    position: absolute;
    top: 0px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 50%;
    transition: left ease 0.5s;
    text-align: center;
    font-size: 16px;
    font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD};
    color: ${(props) => props.theme.colors.WHITE};
  }

  &.on {
    background-color: ${(props) => props.theme.colors.WHITE};
    text-align: left;

    & span:first-of-type {
      color: ${(props) => props.theme.colors.PRIMARY_COLOR};
    }
    & span:last-of-type {
      color: ${(props) => props.theme.colors.WHITE};
    }
  }

  &.on .pin {
    left: 50%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  @media screen and (max-width: 1023px) {
    bottom: -50px;
    left: 5%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
    width: 25%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
    width: 31%;
  }
`;

export const CountryCell = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    margin: 10px 4%;
    fill: ${(props) => props.theme.colors.PRIMARY_COLOR};
    cursor: pointer;

    @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
      margin: 10px 8%;
    }
  }
`;

export const RespRankTable = styled.div`
  & .rank-score-toggle {
    top: 45px;
    width: 15%;
    position: relative;

    @media screen and (max-width: 1023px) {
      width: 18%;
    }

    @media screen and (max-width: 767px) {
      width: 30%;
    }
  }

  & .resp-close {
    position: absolute;
    right: 2%;
    top: 25px;
    transform: rotate(45deg);
    font-size: 30px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.BLACK};
  }

  & .modal__rank-table {
    max-width: 97%;
    margin: 30px auto;
    width: 95%;
    z-index: 2;
    height: 95vh;
    overflow: auto;
    position: absolute;
    left: 2%;
    right: 2%;

    ::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: 767px) {
      margin: 18px auto;
    }
  }

  & .modal__container {
    height: 100vh;
    overflow: auto;
  }

  & .modal__backdrop {
    overflow: hidden;
  }

  & .modal__first-section {
    background: ${(props) => props.theme.colors['1000']};
    height: 338.5px;
    position: relative;

    @media screen and (min-width: ${(props) => props.theme.breakpoints[4]}) {
      height: 30vh;
    }

    @media screen and (max-width: 360px) {
      height: 344.5px;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
      height: 304.5px;
    }
  }

  .__2000 {
    background: ${(props) => props.theme.colors['2000']};
  }

  .__3000 {
    background: ${(props) => props.theme.colors['3000']};
  }

  .__4000 {
    background: ${(props) => props.theme.colors['4000']};
  }

  .__5000 {
    background: ${(props) => props.theme.colors['5000']};
  }
`;

export const CountryHeading = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: 18px;
  }

  & span {
    margin-right: 2%;
    margin-left: 2%;
  }
`;

export const PillarIndicators = styled.div`
  padding: 15px 0;

  .modal-accordion-content {
    display: flex;
    margin: 10px 2.5%;
    overflow: hidden;
    transition: max-height 0.6s ease;
    overflow: auto;
    max-height: fit-content;

    & p {
      line-height: 1.5;
      font-size: 14px;
      width: 100%;
      font-family: ${(props) => props.theme.fonts.ROBOTO_REGULAR};

      @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
        font-size: 12px;
      }
    }
  }
`;

export const RankScoreDataSection = styled.div`
  top: 80px;
  left: 0%;
  position: relative;
  font-size: 26px;
  font-family: ${(props) => props.theme.fonts.ROBOTO_BOLD};

  & ul {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 10px auto;
    flex-direction: column;
    border-top: 1px solid;

    & li {
      width: 98%;
      margin: 10px 0;
      font-size: 16px;
      font-family: ${(props) => props.theme.fonts.ROBOTO_REGULAR};

      & div {
        display: flex;
        justify-content: space-between;

        p {
          width: 95%;

          @media screen and (max-width: 375px) {
            width: 85%;
          }

          @media screen and (max-width: 360px) {
            width: 95%;
          }
        }

        svg {
          margin-left: 2%;
          font-size: 14px;
          color: ${(props) => props.theme.colors.GRAY};
        }
      }

      .modal-accordion-content {
        margin: 10px 0%;
      }

      & span {
        margin-left: 2%;
      }

      @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
        font-size: 12px;
      }
    }
  }

  & .pillarHead {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    & svg {
      font-size: 16px;
      margin: 0 2%;
      color: ${(props) => props.theme.colors.GRAY};
    }

    & span {
      margin: 0 4%;
      vertical-align: middle;
      font-size: 20px;
    }
  }

  & .pillar-heading {
    display: flex;
    width: 90%;
    margin: 20px 0 0 2.6%;
    font-size: 20px;
    font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD};

    @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
      font-size: 16px;
    }
  }
`;

export const GlobalRankInfo = styled.div`
  margin-bottom: ${(props) =>
    props.toVisible === 'visible' ? '160px' : '80px'};
  display: flex;
  flex-direction: column;
  visibility: ${(props) => props.toVisible};
  max-height: ${(props) => (props.toVisible === 'visible' ? '100%' : 0)};
  transition: all 0.5s ease-in;

  @media screen and (max-width: ${(props) => props.theme.breakpoints[4]}) {
    padding: 0 5%;
  }

  h4 {
    font-size: 30px;
    margin: 8px 0;
    margin-bottom: 20px;
    font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD};
  }

  .value {
    font-weight: 800;
    color: ${(props) => props.theme.colors.PRIMARY_COLOR};
  }

  p {
    font-size: 20px;
    margin-bottom: 5px;
    font-family: ${(props) => props.theme.fonts.BEBASNEUE_REGULAR};

    .toggle-label {
      color: ${(props) => props.theme.colors.PRIMARY_COLOR};
    }
  }
`;

export const PillarRankInfo = styled.ul`
  li {
    margin: 8px 0;
    font-family: ${(props) => props.theme.fonts.ROBOTO_REGULAR};
    list-style: auto;
    list-style-position: inside;
    font-size: 16px;
    line-height: 1.3;

    @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
      line-height: 1.3;
      word-break: break-word;
    }

    @media screen and (max-width: 374px) {
      font-size: 17px;
    }
  }
`;

export const CustomHeaderLabel = styled.div`
  svg {
    position: absolute;
    top: -3px;
    right: 10%;
    font-size: 14px;
    cursor: help;
    fill: ${(props) => props.theme.colors.PRIMARY_COLOR};

    @media screen and (max-width: ${(props) => props.theme.breakpoints[4]}) {
      top: 3px;
      right: 0%;
      font-size: 10px;
    }
  }
`;

export const CustomSubHeaderLabel = styled.div`
  white-space: pre-wrap;
  position: absolute;
  z-index: 1;
  font-family: ${(props) => props.theme.fonts.ROBOTO_BOLD};
  font-weight: 500;
  font-size: 14px;
  width: 80%;
  bottom: 35px;
  left: 15px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints[4]}) {
    font-size: 11px;
    width: 60%;
  }

  & svg {
    font-size: 14px;
    margin-left: 5%;
    transform: rotate(70deg);
    cursor: help;
    @media screen and (max-width: ${(props) => props.theme.breakpoints[4]}) {
      font-size: 11px;
    }
  }
`;
