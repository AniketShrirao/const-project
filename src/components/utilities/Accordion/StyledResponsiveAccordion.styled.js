import styled from 'styled-components';
import theme from '../../../themes';

export const StyledAccordionSection = styled.div`
  /* Style the accordion section */
  display: flex;
  flex-direction: column;

  .accordion__content {
    margin-bottom: 16px;
    overflow-x: hidden;

    ::-webkit-scrollbar-thumb {
      background: ${(props) =>
        props.className.includes('world-map-scroll')
          ? props.theme.colors.PRIMARY_COLOR
          : theme.colors.TERTIARY_COLOR};
    }
  }

  /* Style the accordion chevron icon */
  .accordion__icon {
    margin-left: auto;
    transition: transform 0.6s ease;
  }

  /* Style to rotate icon when state is active */
  .rotate {
    transform: rotate(180deg);
  }
`;

export const StyledAccordionButton = styled.button`
  color: ${(props) => props.theme.colors.BLACK};
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;
  background-color: ${(props) =>
    props.colored ? props.colored.pillarColor : props.theme.colors.WHITE};

  &.active {
    background-color: ${(props) => {
      if (props.colored) {
        return props.colored.pillarColor;
      }
      return props.hoverColor
        ? props.theme.colors.TERTIARY_COLOR
        : theme.colors.PRIMARY_COLOR;
    }};
    color: ${(props) => props.theme.colors.WHITE};
  }

  &.active .bi-chevron-down path {
    fill: ${(props) => props.theme.colors.WHITE};
  }
`;

export const StyledAccordionTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.BEBASNEUE_REGULAR}, sans-serif;
  font-weight: 100;
  font-size: 22px;
  letter-spacing: 0.5px;
  text-align: left;
`;

export const StyledAccordionContent = styled.ul`
  overflow: hidden;
  transition: max-height 0.6s ease;
  overflow: scroll;
  background-color: ${(props) =>
    props.colored ? props.colored.subPillarColor : props.theme.colors.WHITE};
`;

export const StyledAccordionText = styled.li`
  font-family: ${(props) => props.theme.fonts.ROBOTO_REGULAR}, sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: ${(props) => props.theme.colors.BLACK};
  padding: 18px 3%;
  letter-spacing: 1px;
  cursor: pointer;

  border: ${(props) =>
    props.hoverColor ? '0.1px solid rgba(0,0,0,0.1)' : 'none'};

  &.active,
  &:hover,
  &.accordion__active-value {
    background-color: ${(props) =>
      props.hoverColor ? props.theme.colors.TERTIARY_COLOR : 'transparent'};
    color: ${(props) =>
      props.hoverColor ? props.theme.colors.WHITE : theme.colors.PRIMARY_COLOR};
  }
`;
