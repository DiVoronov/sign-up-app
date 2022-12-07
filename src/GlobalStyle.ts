import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    /* font-family: 'Comfortaa', 'Segoe UI', 'Roboto', 'Oxygen'; */
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html, body, #root {
    min-height: 100vh;
    overflow-x: hidden;
  }

  body {
    padding-right: 0px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  #root {
    font-size: 1rem;
    font-weight: 450;
  }
`;