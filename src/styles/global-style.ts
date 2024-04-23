import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input, select, textarea {
    font-family: "Open Sans", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Open Sans", sans-serif;
}
`;
