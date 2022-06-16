import styled from 'styled-components';

const PasswordStyle = styled.div`
  .blurClass {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    canvas {
      width: 100vw !important;
      height: 100vh !important;
    }
  }

  .box {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    align-content: center;

    // modified style
    width: 90%;
    padding: 10px 0 20px;
    background-color: #ddd;
    border: none;
    border-radius: 10px;
    & > div {
      width: 80%;
      margin: 0 auto;
      padding: 0;
      &:first-child {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
    }

    .boxTitle {
      margin: 10px auto 15px;
      background-color: #ddd;
      color: #141e28;
      font-family: sans-serif;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      text-transform: uppercase;
      @media screen and (max-width: 540px) {
        font-size: 17px;
      }
    }
    input {
      width: 100%;
      font-family: sans-serif;
      font-size: 14px;
      padding: 8px 10px;
      margin-bottom: 18px;
      border: 1px solid #141e28;
      text-transform: uppercase;
      outline: none;
      &:focus {
        box-shadow: 0 0 3px #141e28;
      }
    }
    button {
      width: 100%;
      border-radius: 5px;
      padding: 10px 10px;
      background-color: #ff5000;
      border: none;
      color: #fff;
      font-family: sans-serif;
      font-size: 15px;
      font-weight: 600;
      text-transform: uppercase;
      cursor: pointer;
      outline: none;
      transition: all 0.1s ease;
      &:hover {
        color: #ddd;
        transition: all 0.1s ease;
      }
    }
  }

  .boxButton {
    align-self: flex-end;
  }
`;

export default PasswordStyle;
