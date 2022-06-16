import styled from 'styled-components';
import { StyledAccordionButton } from '../utilities/Accordion/StyledResponsiveAccordion.styled';

export const PillarTableContainer = styled.div`
  width: 88.5%;
  margin: 60px auto;
  margin-top: 30px;

  .heading {
    margin-bottom: 35px;
  }

  .heading .wrapper {
    width: 100%;

    h1 {
      padding: 20px 1%;
      font-size: 32px;
      line-height: 1.2;
      font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD};

      @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
        font-size: 28px;
      }

      @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
        font-size: 26px;
      }
    }
  }

  .pillar-header {
    width: 100%;
    cursor: default;
    position: relative;
    border-bottom: 1px solid ${(props) => props.theme.colors.PRIMARY_COLOR};
    border-top: 1px solid ${(props) => props.theme.colors.PRIMARY_COLOR};
  }

  .pillar-table {
    padding: 0 1%;
    color: ${(props) => props.theme.colors.BLACK};

    & .fa-caret-up,
    & .fa-caret-down {
      color: ${(props) => props.theme.colors.RANK_TABLE_SVG_COLOR};
    }
  }

  .pillar-names,
  .pillar-scores {
    font-family: ${(props) => props.theme.fonts.ROBOTO_MEDIUM};
    font-size: 18px;
    font-weight: 300;
  }

  .pillar-names {
    width: 88.7%;
    padding: 9px 1%;
    font-weight: 100;
  }

  .pillar-scores {
    width: 22%;
    padding: 18px 2%;
    text-align: center;
    transition: all 0.2s ease;
    text-indent: 14%;
  }

  .overflow-hide {
    overflow: hidden;
  }

  .pillar-names,
  .sub-pillar-header {
    svg {
      margin: 0 1%;
      vertical-align: bottom;
      cursor: help;
    }
  }

  .sub-pillar-header {
    display: flex;
    padding: 0;
    cursor: default;

    &:hover {
      color: initial;
    }
  }

  .sub-pillar-names {
    width: 78.6%;
    padding: 18px 37% 18px 4%;
  }

  .sub-pillar-scores {
    width: 22%;
    padding: 18px 1%;
    text-align: center;
  }

  .accordion__content {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 1360px) and (max-width: 1600px) {
    .pillar-names {
      width: 88.1%;
    }
  }

  @media screen and (min-width: 1600px) {
    .pillar-names {
      width: 87.1%;
    }
    .sub-pillar-names {
      width: 78.6%;
    }
  }

  @media screen and (min-width: 2160px) {
    .pillar-names {
      width: 87%;
    }
    .sub-pillar-names {
      width: 78.7%;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[4]}) {
    .pillar-names {
      width: 89.9%;
    }
    .sub-pillar-names {
      width: 78.5%;
      padding: 18px 4% 18px 4%;
    }
  }

  @media screen and (max-width: 995px) {
    .pillar-names {
      width: 92.5%;
    }
    .sub-pillar-names {
      width: 78.8%;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
    .pillar-names {
      width: 93.5%;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
    .pillar-names {
      width: 69.6%;
    }

    .sub-pillar-names {
      width: 69.3%;
    }

    .pillar-header {
      padding: 0 2%;
    }

    .pillars-accordion svg.fa-caret-down,
    .pillars-accordion svg.fa-caret-up {
      font-size: 1.03em;
    }

    .sub-pillar-names {
      padding: 13px 9% 13px 4%;
      font-size: 13px;
      line-height: 1.2;
    }

    .pillar-names,
    .pillar-scores,
    .sub-pillar-scores {
      font-size: 13px;
      line-height: 1.2;
    }

    .custom-dropdown-wrapper {
      width: 30%;
    }

    .pillar-scores {
      text-indent: 2%;
    }
  }

  @media only screen and (max-width: 1300px) and (min-width: 995px) {
    .sub-pillar-names {
      padding: 18px 0% 18px 4%;
    }
  }

  @media only screen and (max-width: 995px) and (min-width: ${(props) =>
      props.theme.breakpoints[3]}) {
    .sub-pillar-names {
      padding: 18px 5% 18px 4%;
    }
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints[3]}) and (min-width: ${(props) =>
      props.theme.breakpoints[2]}) {
    .pillar-names {
      padding: 9px 0.5% 9px 1%;
    }
    .sub-pillar-names {
      padding: 18px 5% 18px 4%;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[1]}) {
    .pillar-names {
      width: 69.6%;
      padding: 9px 10% 9px 1%;
    }

    .sub-pillar-names {
      width: 69.3%;
      padding: 9px 7% 9px 5%;
    }

    .pillars-accordion
      .accordion__section:nth-of-type(3)
      ul
      > li:first-of-type
      .sub-pillar-names {
      padding: 18px 5% 18px 4%;
    }

    .pillar-names,
    .pillar-scores,
    .sub-pillar-scores {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 375px) {
    .pillar-names {
      padding: 9px 7% 9px 1%;
    }
    .sub-pillar-names {
      padding: 9px 1% 9px 5%;
    }

    .pillars-accordion
      .accordion__section:nth-of-type(3)
      ul
      > li:first-of-type
      .sub-pillar-names,
    .pillars-accordion
      .accordion__section:nth-of-type(4)
      ul
      > li:first-of-type
      .sub-pillar-names {
      padding: 18px 2% 18px 4%;
    }
  }

  @media screen and (max-width: 375px) {
    .pillars-accordion
      .accordion__section:nth-of-type(3)
      ul
      > li:first-of-type
      .sub-pillar-names {
      padding: 18px 8% 18px 4%;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
    .pillar-names {
      padding: 9px 0% 9px 1%;
    }
    .sub-pillar-names {
      padding: 9px 0% 9px 5%;
      font-size: 11px;
    }
  }
`;

export const AccordionHeader = styled(StyledAccordionButton)`
  display: flex;
  justify-content: space-between;
  padding: 0 0 0 1%;

  .custom-dropdown-wrapper {
    margin: 0;
  }

  .spider-select {
    &__indicators {
      border: none;
    }

    &__indicator svg {
      color: ${(props) => props.theme.colors.RANK_TABLE_SVG_COLOR};
    }

    &__control {
      background-color: transparent;
      border: none;

      &--is-focused {
        border-color: transparent !important;
        box-shadow: none;
      }

      &::hover {
        border-color: transparent;
      }
    }

    &__single-value,
    &__placeholder {
      color: ${(props) => props.theme.colors.BLACK};
      text-indent: 20%;
      opacity: 1;
      @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
        text-indent: 0;
      }
    }

    &__option {
      background-color: ${(props) => props.theme.colors.WHITE};
      color: ${(props) => props.theme.colors.BLACK};
    }

    &__value-container {
      padding: 16px;
      font-size: 25px;
    }

    &__menu {
      font-size: 18px;
    }
  }

  .accordion__title {
    font-size: 25px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
    .accordion__title,
    .spider-select__value-container {
      font-size: 22px;
    }

    .spider-select__indicators {
      padding-right: 1px;
    }

    .spider-select__menu {
      font-size: 17px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
    .accordion__title,
    .spider-select__value-container {
      font-size: 18px;
    }
    .spider-select__menu {
      font-size: 16px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[1]}) {
    .accordion__title,
    .spider-select__value-container {
      font-size: 16px;
    }
    .spider-select__menu {
      font-size: 15px;
    }
  }
`;

export const StyledSubHeadings = styled.h3`
  display: inline-block;
  margin: 10px 2% 10px 2%;
  font-size: 15px;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.ROBOTO_REGULAR};
  color: ${(props) => props.theme.colors.BLACK};

  @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: 12px;
  }

  & span {
    color: ${(props) => props.theme.colors.SECONDARY_COLOR};
    font-family: ${(props) => props.theme.fonts.ROBOTO_BOLD};
  }
`;
