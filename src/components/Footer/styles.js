import styled from "styled-components"

export const LCFooter = styled.footer`
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #e6e6e6a9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
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
      color: #000;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      height: 100%;
      width: 50px;
      transition: 0.2s;
      &:hover {
        background: #f3f3f3;
        color: #187888;
      }
      svg {
        font-size: 24px;
      }
    }
  }
`
