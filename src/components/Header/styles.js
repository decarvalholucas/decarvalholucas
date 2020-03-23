import AniLink from "gatsby-plugin-transition-link/AniLink"

import styled from "styled-components"

import themeColor from "../../styles/themeColor"

export const LCHeader = styled.header`
  background-color: ${themeColor.currentLine};
  z-index: 999;
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${themeColor.textColor};
    margin: 0 auto;
    max-width: 1020px;
    padding: 15px;
    .logo {
      font-size: 18px;
      color: ${themeColor.textColor};
      text-decoration: none;
      font-weight: 600;
    }
    .menu {
      > svg {
        font-size: 24px;
      }
      div {
        ul {
          list-style: none;
          padding: 10px;
          height: 100%;
          display: flex;
          li {
            :first-child {
              border-right: 1px solid ${themeColor.textColor};
              padding-right: 10px;
              margin-right: 10px;
            }
            a {
              display: block;
              color: ${themeColor.textColor};
              text-decoration: none;
              text-transform: lowercase;
            }
          }
        }
      }
    }
  }
`

export const LinkTranstionDown = styled(AniLink).attrs(() => {
  return {
    cover: "true",
    bg: themeColor.themeBackgroundColor,
    direction: "down",
    duration: "0.5",
  }
})``

export const LinkTranstionUp = styled(AniLink).attrs(() => {
  return {
    cover: "true",
    bg: themeColor.themeBackgroundColor,
    direction: "up",
    duration: "0.5",
  }
})``