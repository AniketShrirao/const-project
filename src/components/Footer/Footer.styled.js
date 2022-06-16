import styled from 'styled-components';

const FooterContainer = styled.footer`
  font-family: ${(props) => props.theme.fonts.BEBASNEUE_REGULAR};
  border-top: 1px solid ${(props) => props.theme.colors.WHITE};
  background-color: ${(props) => props.theme.colors.BACKGROUND_COLOR};
  padding: 50px 0;
`;

const QuickLinks = styled.div`
  ul {
    display: flex;
    align-items: center;

    @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
      flex-wrap: wrap;
      align-items: flex-start;
    }

    li {
      padding-right: 20px;

      @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
        padding-right: 0;
      }
    }

    li.contact-button {
      @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
        text-align: center;
        width: 100%;
        margin-bottom: 25px;
      }

      a {
        display: flex;
        align-items: center;
        padding: 8px 24px 4px;
        font-size: 26px;
        font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD}, sans-serif;
        background-color: ${(props) => props.theme.colors.WHITE};
        color: ${(props) => props.theme.colors.PRIMARY_COLOR};
        transition: 0.2s box-shadow;

        @media screen and (max-width: ${(props) =>
            props.theme.breakpoints[3]}) {
          display: inline-flex;
          padding: 10px 24px 4px;
        }

        span.contact-text {
          margin-right: 16px;
        }

        span.plus-icon {
          position: relative;
          top: -1px;
          transition: 1s;

          &::after {
            content: '+';
            display: block;
            width: 10px;
            height: 10px;
            position: relative;
            top: -6px;
          }
        }

        &:hover {
          box-shadow: 2px 2px 12px
            ${(props) => props.theme.colors.PRIMARY_COLOR};

          span.plus-icon {
            transform: rotate(360deg);
          }
        }
      }
    }

    li.social-link {
      text-align: center;

      a {
        @media screen and (max-width: ${(props) =>
            props.theme.breakpoints[3]}) {
          display: inline-block;
        }
      }

      @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
        text-align: center;
        width: 20%;
        margin-bottom: 12px;
      }

      figure {
        width: 45px;

        img {
          width: 100%;
          border-radius: 50%;
          transition: 0.2s box-shadow;

          &:hover {
            box-shadow: 2px 2px 12px
              ${(props) => props.theme.colors.PRIMARY_COLOR};
          }
        }
      }
    }
  }
`;

const CopyrightInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${(props) => props.theme.fonts.ROBOTO_THIN}, sans-serif;
  font-weight: 600;
  margin-top: 30px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
    flex-wrap: wrap;
    margin-top: 12px;
    justify-content: center;
  }

  .copyright {
    p {
      margin-top: 20px;
      font-size: 12px;
      padding-right: 8px;

      @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
        text-align: center;
        line-height: 1.8;
      }

      span {
        @media screen and (max-width: ${(props) =>
            props.theme.breakpoints[3]}) {
          display: block;
        }

        &::after {
          content: '|';
          margin: 0 18px;

          @media screen and (max-width: ${(props) =>
              props.theme.breakpoints[3]}) {
            content: none;
          }
        }
      }

      a {
        &:hover {
          color: ${(props) => props.theme.colors.PRIMARY_COLOR};
        }
      }
    }
  }

  .footer-logo {
    @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
      width: 100%;
      margin-top: 18px;
      max-width: 226px;
    }

    figure {
      a {
        @media screen and (max-width: ${(props) =>
            props.theme.breakpoints[3]}) {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;

export { FooterContainer, QuickLinks, CopyrightInfo };
