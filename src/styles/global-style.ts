import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: rgb(55, 56, 64);
  }

  body, button, input, select, textarea {
    color: rgb(55, 56, 64);
  }

  h1, h2, h3, h4, h5, h6 {
    color: rgb(55, 56, 64);
}
`;
