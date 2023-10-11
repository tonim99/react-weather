import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100vh;
    width: 100%;
    background: ${(props) => props.theme.bg};
    background-image: ${(props) => props.theme.bgImage};
    background-attachment: fixed;
    background-size: cover;
  }
`;

export default GlobalStyle;