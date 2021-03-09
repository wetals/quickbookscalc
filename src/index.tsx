import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  * {
    font-family: 'Roboto', 'Helvetica Neue', sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
