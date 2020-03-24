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
    margin: 0 0 20px 0;
  }
  h2 {
    line-height: 35px;
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
      color: ${themeColor.cyan};
      font-weight: 600;
      text-decoration: none;
      border-bottom: 2px solid;
      padding-bottom: 3px;
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
    border-left: 8px solid ${themeColor.cyan};
    line-height: 1.6;
    position: relative;
    background: ${themeColor.currentLine};
    border-radius: 5px;
    &::before {
      font-family: "Arial";
      content: '"';
      color: ${themeColor.cyan};
      font-size: 4em;
      position: absolute;
      left: 10px;
      top: -10px;
    }
    p {
      margin: 0;
    }
  }
`
