import AniLink from "gatsby-plugin-transition-link/AniLink"

import styled from "styled-components"

import themeColor from "../styles/themeColor"

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
  h1 {
    font-size: 24px;
    margin: 0 0 20px 0;
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
  .blog-latest-posts {
    margin: 25px 0;
    color: ${themeColor.textColor};
    font-size: 18px;
    font-weight: 300;
    border-top: 1px solid ${themeColor.currentLine};
    padding-top: 20px;
  }
  .postlist__container {
    border: 1px solid ${themeColor.currentLine};
    padding: 20px;
    margin: 25px 0;
    border-radius: 4px;
    transition: ease-in 0.02s;
    &:hover {
      transform: scale(1.02);
      border: 1px solid ${themeColor.textColor};
    }
    .post__date {
      margin-bottom: 15px;
      color: ${themeColor.textColor};
      font-size: 12px;
    }
    .post__slug {
      text-decoration: none;
      .post__title {
        font-size: 26px;
        color: ${themeColor.textColor};
      }
      .post__description {
        margin-top: 10px;
        color :${themeColor.textColor};
        font-size: 20px;
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