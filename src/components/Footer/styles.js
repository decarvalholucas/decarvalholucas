import styled from "styled-components"

import themeColor from "../../styles/themeColor";

export const LCFooter = styled.footer`
  width: 100%;
  background-color: ${themeColor.themeBackgroundColor};
  border-top: 1px solid ${themeColor.currentLine};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 150px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: ${themeColor.textColor};
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      height: 100%;
      width: 50px;
      transition: 0.2s;
      &:hover {
        background: ${themeColor.currentLine};
        color: ${themeColor.cyan};
      }
      svg {
        font-size: 24px;
      }
    }
  }
`
