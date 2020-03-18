import styled from "styled-components";

export const LCHeader = styled.header`
  background-color: rgba(15,15,15,0.95);
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFF;
    margin: 0 auto;
    max-width: 1020px;
    padding: 15px;
    .logo {
      font-size: 18px;
    }
    .menu {
      svg {
        font-size: 24px;
      }  
    }
  }
`;