import styled from 'styled-components';

import themeColor from "../../styles/themeColor";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  /* padding-top: 78px; */
`;

export const Content = styled.div`
  padding: 10px;
  margin: 10px;
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
    }
  }
`;