import { createGlobalStyle } from "styled-components"

import themeColor from "../styles/themeColor"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  html, body, #___gatsby {
    height: 100%;
    background: ${themeColor.themeBackgroundColor};
    color: ${themeColor.textColor};
  }
  .gatsby-plugin-transition-link-portal {
    width: 100%;
  }
`

export default GlobalStyle
