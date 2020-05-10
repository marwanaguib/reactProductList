import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding:0;
}
*{
  box-sizing:border-box;
}
`;

export const H1 = styled.h1`
  text-align: ${(props) => props.align};
`;

export const Loader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  z-index: 9;

  :before {
    content: "";
    display: block;
    position: absolute;
    border: 2px rgba(0, 0, 0, 0.5) solid;
    border-right: 0;
    border-radius: 50%;
    z-index: 4;
    width: 50px;
    height: 50px;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    -webkit-animation: spin 0.8s linear infinite;
    animation: spin 0.8s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const DFlex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;
