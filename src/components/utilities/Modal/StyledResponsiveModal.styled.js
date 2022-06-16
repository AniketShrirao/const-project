import styled from 'styled-components';

const StyledModal = styled.div`
  .close__modal {
    padding: 20px 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-size: 28px;
      text-transform: uppercase;
      font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD};
      color: ${(props) => props.theme.colors.TERTIARY_COLOR};
    }

    .world-map-filter-heading {
      color: ${(props) => props.theme.colors.PRIMARY_COLOR};
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints[1]}) {
      padding: 20px 3%;
    }
  }

  .modal__backdrop {
    background: rgba(0, 0, 0, 0.65);
    bottom: 0;
    left: 0;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .modal__container {
    background: ${(props) => props.theme.colors.WHITE};
    border-radius: 5px;
    max-width: 100%;
    margin: 1px auto;
    width: 100%;
    z-index: 2000;
    height: 99.7vh;
  }

  .description-popup {
    display: flex;
    background: ${(props) => props.theme.colors.WHITE};
    border-radius: 5px;
    max-width: 58.5%;
    margin: 1px auto;
    width: 100%;
    height: fit-content;
    top: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    right: 0;
    transform: translate(-50%, -50%);

    @media screen and (max-width: ${(props) => props.theme.breakpoints[4]}) {
      max-width: 90.5%;
    }

    & .popup-close {
      position: absolute;
      right: 2%;
      top: 10px;
      font-size: 18px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[4]}) {
    .buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 15px;
    }
  }
`;

export default StyledModal;
