import styled from 'styled-components';

const HeaderContainer = styled.header`
  font-family: ${(props) => props.theme.fonts.BEBASNEUE_REGULAR};
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.SECONDARY_COLOR} 50%,
    ${(props) => props.theme.colors.PRIMARY_COLOR} 50%
  );

  @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
    position: relative;
    background: ${(props) => props.theme.colors.SECONDARY_COLOR};
  }

  .site-logo .heading h1 {
    padding: 17px 2%;
    font-size: 28px;
    text-align: left;
    position: relative;
    color: #feffff;

    &::before {
      content: '';
      width: 73%;
      background: #feffff;
      height: 1px;
      display: block;
      position: absolute;
      top: 0px;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints[4]}) {
      font-size: 24px;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
      width: 100%;

      &::before {
        width: 44%;
      }
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints[1]}) {
      font-size: 18px;
    }

    @media screen and (max-width: 400px) {
      font-size: 16px;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
      font-size: 14px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
    .heading .wrapper {
      width: 100%;
    }
  }

  .wrapper {
    display: flex;
    align-items: flex-end;
    color: ${(props) => props.theme.colors.WHITE};
    background: transparent;
    width: 94%;

    @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
      flex-wrap: wrap;
    }

    .hamburger {
      padding: 12px;
      display: none;
      position: absolute;
      right: 2%;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.8;

      @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
        display: block;
      }

      &.active {
        .hamburger-box {
          .hamburger-inner {
            transform: rotate(225deg);
            transition-delay: 0.12s;
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

            &::before {
              top: 0;
              opacity: 0;
              transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
            }

            &::after {
              bottom: 0;
              transform: rotate(-90deg);
              transition: bottom 0.1s ease-out,
                transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
            }
          }
        }
      }

      .hamburger-box {
        width: 40px;
        height: 24px;
        display: inline-block;
        position: relative;

        .hamburger-inner {
          display: block;
          top: 50%;
          margin-top: -0.2rem;
          width: 40px;
          height: 4px;
          background-color: ${(props) => props.theme.colors.WHITE};
          border-radius: 4px;
          position: absolute;
          transition-property: transform;
          transition-duration: 0.15s;
          transition-timing-function: ease;

          &::before,
          &::after {
            content: '';
            display: block;
            width: 40px;
            height: 4px;
            background-color: ${(props) => props.theme.colors.WHITE};
            border-radius: 4px;
            position: absolute;
            top: -10px;
            transition-property: transform;
            transition-duration: 0.15s;
            transition-timing-function: ease;
          }

          &::after {
            top: auto;
            bottom: -10px;
          }
        }
      }

      &.active ~ .nav-area {
        display: block;
        height: 100vh;
      }
    }

    .site-logo {
      width: 55%;
      background-color: ${(props) => props.theme.colors.SECONDARY_COLOR};

      @media screen and (max-width: ${(props) => props.theme.breakpoints[4]}) {
        width: 65%;
      }

      @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
        width: 100%;
      }

      > h1 {
        @media screen and (max-width: ${(props) =>
            props.theme.breakpoints[3]}) {
          width: 58%;
        }

        figure {
          max-width: 330px;
          padding: 18px 18px 18px 0;

          @media screen and (max-width: ${(props) =>
              props.theme.breakpoints[3]}) {
            padding-top: 32px;
          }

          @media screen and (max-width: 570px) {
            padding-top: 44px;
          }

          @media screen and (max-width: 480px) {
            padding-top: 54px;
            min-width: 210px;
          }

          a {
            display: block;

            img {
              width: 100%;
            }
          }
        }
      }
    }

    .nav-area {
      background-color: ${(props) => props.theme.colors.PRIMARY_COLOR};
      width: 65%;
      padding: 140px 0 32px;
      position: relative;

      .heading h1 {
        position: absolute;
        left: 12%;
        font-size: 100px;
        padding: 50px 0 0px;
        background: -webkit-linear-gradient(#ff5000, #fff);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        user-select: none;

        @media screen and (max-width: 1024px) {
          left: 5%;
        }

        @media screen and (min-width: 1360px) {
          left: 10%;
        }
      }

      @media screen and (max-width: ${(props) => props.theme.breakpoints[4]}) {
        padding: 140px 0 32px;
      }

      @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
        display: none;
        padding: 12px 0;

        .heading h1 {
          padding: 15px 0 0px;
          font-size: 80px;
          position: relative;
          left: 2%;
        }
      }

      @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
        width: 100%;
        position: absolute;
        left: 0;
        top: 200px;
        z-index: 9;
      }

      @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
        .heading h1 {
          left: 4%;
        }
      }

      @media screen and (max-width: ${(props) => props.theme.breakpoints[1]}) {
        top: 180px;
      }

      @media screen and (max-width: 400px) {
        top: 175px;
      }

      nav {
        font-size: 26px;
        margin-top: 16px;

        @media screen and (max-width: ${(props) =>
            props.theme.breakpoints[3]}) {
          margin-top: 0px;
        }

        & > ul {
          margin-left: 74px;
          display: flex;

          @media screen and (max-width: ${(props) =>
              props.theme.breakpoints[4]}) {
            margin-left: 18px;
          }

          @media screen and (max-width: ${(props) =>
              props.theme.breakpoints[3]}) {
            margin-left: 12px;
            flex-wrap: wrap;
          }

          & > li {
            display: flex;

            @media screen and (max-width: ${(props) =>
                props.theme.breakpoints[4]}) {
              width: 50%;
              &:first-of-type {
                width: 28%;
              }
            }

            @media screen and (max-width: 995px) {
              width: 65%;
              &:first-of-type {
                width: 35%;
              }
            }

            @media screen and (max-width: ${(props) =>
                props.theme.breakpoints[3]}) {
              width: 96%;
            }

            & > a,
            & > .dropdown-menu {
              display: inline;
              position: relative;
              padding: 6px 12px 0;
              background: none;
              cursor: pointer;
              border: none;
              font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD}, Arial,
                sans-serif;

              @media screen and (max-width: ${(props) =>
                  props.theme.breakpoints[4]}) {
                padding: 6px 11px 0;
              }

              @media screen and (max-width: ${(props) =>
                  props.theme.breakpoints[3]}) {
                display: block;
                padding: 6px 2px 0;
                margin: 10px 0px;
              }

              &::before {
                content: '';
                background: ${(props) => props.theme.colors.WHITE};
                position: absolute;
                left: 50%;
                bottom: 4px;
                width: 70%;
                height: 2px;
                opacity: 0;
                transform: translate(-50%, -10px);
                transition: 0.2s transform, 0.15s opacity;

                @media screen and (max-width: ${(props) =>
                    props.theme.breakpoints[3]}) {
                  content: none;
                }
              }
              &:hover:not(.active)::before {
                opacity: 1;
                transform: translate(-50%, 8px);
              }
            }

            & > a::before {
              left: 48%;
            }

            & > .dropdown-menu::before {
              left: 42%;
            }

            .dropdown-menu {
              user-select: none;
              padding-right: 40px;
              width: 100%;

              @media screen and (max-width: ${(props) =>
                  props.theme.breakpoints[4]}) {
                width: 85%;
              }

              @media screen and (max-width: ${(props) =>
                  props.theme.breakpoints[3]}) {
                padding-right: 12px;
              }

              &::after {
                content: '';
                position: absolute;
                top: 18px;
                right: 10px;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-top: 8px solid ${(props) => props.theme.colors.WHITE};
                transition: 0.2s transform;

                @media screen and (max-width: ${(props) =>
                    props.theme.breakpoints[3]}) {
                  right: 4px;
                  left: 165px;
                  right: auto;
                }
              }

              .dropdown-items {
                max-height: 194px;
                overflow: auto;
                font-size: 22px;
                border-radius: 4px;
                opacity: 0;
                visibility: hidden;
                width: 270px;
                position: absolute;
                top: 40px;
                box-shadow: 2px 2px 12px
                  ${(props) => props.theme.colors.DROP_SHADOW};
                background-color: ${(props) => props.theme.colors.WHITE};
                color: ${(props) => props.theme.colors.PRIMARY_COLOR};
                z-index: 9;
                transition: 0.2s opacity, 0.2s max-height;

                &::-webkit-scrollbar {
                  width: 6px;
                }

                @media screen and (max-width: ${(props) =>
                    props.theme.breakpoints[3]}) {
                  margin-top: 4px;
                  padding-top: 4px;
                  padding-right: 0;
                  position: static;
                  max-height: 0;
                  width: 100%;
                  box-shadow: none;
                  font-size: 20px;
                  border-radius: 0;
                }

                li {
                  padding: 0 12px;

                  @media screen and (max-width: ${(props) =>
                      props.theme.breakpoints[3]}) {
                    padding: 0 12px;
                  }

                  &:not(:last-child) {
                    border-bottom: 1px solid
                      ${(props) => props.theme.colors.BACKGROUND_COLOR};
                  }

                  @media screen and (min-width: 769px) {
                    &:hover {
                      background-color: ${(props) =>
                        props.theme.colors.PRIMARY_COLOR};
                      color: ${(props) => props.theme.colors.WHITE};
                    }
                  }

                  a {
                    width: 100%;
                    display: block;
                    padding: 8px 0;
                  }
                }
              }

              &.active {
                &::after {
                  transform: rotate(-180deg);
                }

                .dropdown-items {
                  opacity: 1;
                  visibility: visible;

                  @media screen and (max-width: ${(props) =>
                      props.theme.breakpoints[3]}) {
                    max-height: 222px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Container = styled.header``;

export { HeaderContainer, Container };
