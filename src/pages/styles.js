import styled from "styled-components"

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 100%;
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
      color: #187888;
      font-weight: 600;
      text-decoration: none;
    }
    img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
  }
  .blog-latest-posts {
    margin: 25px 0;
    color: #aaa;
    font-size: 18px;
    font-weight: 300;
    border-top: 1px solid #eee;
    padding-top: 20px;
  }
  .postlist__container {
    box-shadow: 0 1px 3px rgba(18,18,18,0.12);
    padding: 20px;
    margin: 25px 0;
    border-radius: 4px;
    transition: ease-in 0.02s;
    &:hover {
      transform: scale(1.02);
      border: 1px solid #777;
    }
    .post__date {
      margin-bottom: 15px;
      color: #aaa;
      font-size: 12px;
    }
    .post__slug {
      text-decoration: none;
      .post__title {
        font-size: 26px;
        color: #000;
      }
      .post__description {
        margin-top: 10px;
        color :#666;
        font-size: 20px;
      }
    }
  }
`
