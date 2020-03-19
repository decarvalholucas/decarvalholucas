import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 100%;
`;

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
`;