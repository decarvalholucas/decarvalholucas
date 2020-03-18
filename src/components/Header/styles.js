import styled from "styled-components"

export const LCHeader = styled.header`
  background-color: rgba(15, 15, 15, 1);
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    margin: 0 auto;
    max-width: 1020px;
    padding: 15px;
    .logo {
      font-size: 18px;
    }
    .menu {
      > svg {
        font-size: 24px;
      }
      div {
        ul {
          background: rgba(15, 15, 15, 1);
          list-style: none;
          padding: 10px;
          height: 100%;
          display: flex;
          li {
            :first-child {
              border-right: 1px solid #555;
              padding-right: 10px;
              margin-right: 10px;
            }
            a {
              display: block;
              color: #fff;
              text-decoration: none;
              text-transform: lowercase;
            }
          }
        }
      }
    }
  }
`
