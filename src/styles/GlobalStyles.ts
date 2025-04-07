import { createGlobalStyle } from "styled-components";
import { theme } from "./theme.ts";

export const GlobalStyle = createGlobalStyle`
  html, body{
    margin: 0px;
    font-family: ${theme.fontFamily.copyFont};
    font-weight: 350;
    color: ${theme.color.black};
    scroll-behavior: smooth;
    max-width: 100vw;
  }

  h1, h2, h3, h4, h5{
    font-family: ${theme.fontFamily.headerFont};
    font-weight: 400;
    text-align: center;
  }

  p{
  font-family: ${theme.fontFamily.copyFont};
  line-height: 1.5rem;
  font-weight: 400;
  }
  
  a{
  text-decoration: none;
  }

  main{
    min-height: calc(100vh - 210px);
  }
`;
