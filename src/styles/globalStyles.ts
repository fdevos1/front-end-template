import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
#root,
body {
display: flex;
  
  width: 100vw;
  height: 100vh;
  font-size: 16px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: #000;
}
html, #root, body, * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box
}
@media screen and (max-width: 768px) {
  html, body {
    font-size: 11px;
  }
}
@media screen and (max-width: 1024px) {
  html,body {
    font-size: 12px;
  }
}
@media screen and (max-width: 1440px) {
  html, body {
    font-size: 13px;
  }
}
`;

export default GlobalStyles;
