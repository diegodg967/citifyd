import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input, select, textarea {
    color: ${({ theme }) => theme?.colors?.text?.main};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme?.colors?.text?.main};
}
`;
