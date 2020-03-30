import styled from "styled-components"

import themeColor from "../../styles/themeColor"

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 100%;
  /* padding-top: 78px; */
`

export const Content = styled.div`
  padding: 10px;
  margin: 10px;
  height: 100%;
  time {
    color: #787878;
    display: block;
    font-size: 16px;
    letter-spacing: 1px;
    margin: 0 0 20px 0;
  }
  h1 {
    font-size: 24px;
    line-height: 35px;
    margin: 0 0 20px 0;
  }
  h2 {
    line-height: 35px;
    margin: 0 0 10px 0;
  }
  figure {
    .gatsby-resp-image-figcaption {
      display: none;
    }
  }
  p {
    font-size: 18px;
    line-height: 30px;
    margin: 0 0 20px 0;
    a {
      color: ${themeColor.red};
      font-weight: 600;
      text-decoration: none;
    }
    img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
  }
  blockquote {
    margin: 0 0 20px 0;
    font-style: italic;
    color: ${themeColor.textColor};
    padding: 10px 55px;
    border-left: 8px solid ${themeColor.red};
    line-height: 1.6;
    position: relative;
    background: ${themeColor.currentLine};
    border-radius: 5px;
    &::before {
      font-family: "Arial";
      content: '"';
      color: ${themeColor.red};
      font-size: 4em;
      position: absolute;
      left: 10px;
      top: -10px;
    }
    p {
      margin: 0;
    }
  }
  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }
  #thread__container {
    background: red;
  }
`
