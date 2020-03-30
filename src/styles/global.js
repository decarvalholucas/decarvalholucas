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
  .footer_copy {
    text-align: center;
    font-size: 11px;
    margin: 80px 0 20px 0;
    padding: 0 10px;
    a {
      text-decoration: none;
      color: ${themeColor.red};
    }
  }
  .comment__header {
    .post-byline {
      .publisher-anchor-color {
        a {
          color: #FFF !important;
          font-size: 32px !important;
        }
      }
    }
  }
  
`

export default GlobalStyle
