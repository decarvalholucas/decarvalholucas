import styled from 'styled-components';

import themeColor from "../../styles/themeColor";

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding: 10px;
  margin: 10px;
  text-align: center;
  h1 {
    font-size: 24px;
    margin: 0 0 20px 0;
    line-height: 40px;
  }
  h2 {
    margin: 0 0 20px 0;
    font-size: 24px;
    line-height: 40px;
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
  }
`;
