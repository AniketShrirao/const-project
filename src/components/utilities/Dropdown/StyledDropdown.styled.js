import styled from 'styled-components';

export const SelectContainer = styled.div`
  margin: 50px 2%;
  width: 100%;
  cursor: pointer;

  .custom-select {
    font-size: 12px;
    font-weight: 600;
    border: 1px solid ${(props) => props.theme.colors.DROP_SHADOW};

    &__control {
      cursor: pointer;
      border: 1px solid ${(props) => props.theme.colors.DROP_SHADOW};
      border-radius: 0;
      outline: none;
      max-width: 100%;
      filter: drop-shadow(
        0px 2px 4px ${(props) => props.theme.colors.DROP_SHADOW}
      );
      border: none;

      &--is-focused {
        border-color: transparent !important;
        box-shadow: none;
      }

      &::hover {
        border-color: transparent;
      }
    }

    &__indicator-separator {
      display: none;
    }

    &__value-container {
      padding: 10px 16px;
      font-family: ${(props) => props.theme.fonts.BEBASNEUE_REGULAR}, sans-serif;
      font-size: 20px;
      font-weight: 500;
      text-transform: uppercase;
    }

    &__single-value,
    &__placeholder {
      color: ${(props) => props.theme.colors.PRIMARY_COLOR};
    }

    &__indicators {
      padding-right: 10px;
      border-left: 1px solid ${(props) => props.theme.colors.DROP_SHADOW};
      padding-left: 5px;
    }

    &__menu {
      margin: 0;
      margin-top: 2px;
      position: absolute;
      font-family: ${(props) => props.theme.fonts.ROBOTO_REGULAR}, sans-serif;
      font-weight: 500;
      line-height: 1.2;

      & div {
        cursor: pointer;
        min-height: 40px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
    }
  }
`;

export const SpiderContainer = styled.div`
  margin: 50px 1%;
  width: 22%;
  cursor: pointer;

  .spider-select {
    font-size: 12px;
    font-weight: 600;

    &__control {
      cursor: pointer;
      border: 1px solid ${(props) => props.theme.colors.TERTIARY_COLOR};
      border-radius: 0 !important;
      outline: none;
      max-width: 415px;
      background: ${(props) => props.theme.colors.TERTIARY_COLOR};

      &:hover {
        border-color: ${(props) => props.theme.colors.TERTIARY_COLOR};
      }
    }

    &__indicator-separator {
      display: none;
    }

    &__value-container {
      padding: 10px 16px;
      font-family: ${(props) => props.theme.fonts.BEBASNEUE_REGULAR}, sans-serif;
      font-size: 20px;
      font-weight: 500;
      text-transform: uppercase;
    }

    &__single-value,
    &__placeholder {
      color: ${(props) => props.theme.colors.WHITE};
      opacity: 0.8;
    }

    &__indicators {
      padding-right: 10px;
      border-left: 1px solid rgba(255, 255, 255, 0.6);
      padding-left: 5px;
    }

    &__menu {
      margin: 0;
      margin-top: 2px;
      position: absolute;
      font-family: ${(props) => props.theme.fonts.ROBOTO_REGULAR}, sans-serif;
      font-weight: 500;
      line-height: 1.2;

      & div {
        cursor: pointer;
        min-height: 40px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
    }
  }
`;
