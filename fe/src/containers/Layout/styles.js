import styled from "styled-components";

export const SFooter = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #3e3e3e;
  border-top: 1px solid rgba(222, 222, 222, 1);
  padding: 30px 0;
`;

export const SLayout = styled.div`
  min-height: 100vh;
  /* display: flex; */
  @media screen and (max-width: 1850px) {
    padding-left: 150px;
  }
  .layout-left {
    position: fixed;
    top: 0%;
    left: 0;
    width: 150px;
    background: #191718;
    height: 100vh;
    overflow: auto;
  }
  .layout-right {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width: 1850px) {
      
    }
    .footer {
      padding-left: 150px;
      padding-right: 150px;
      margin-top: 70px;
      @media screen and (max-width: 1300px) {
        margin-top: 50px;
      }
      @media screen and (max-width: 991px) {
        margin-top: 30px;
      }
    }
  }
`;

export const SNav = styled.div`
  .menu {
    .menu-item {
      display: block;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      padding: 14px 10px 11px 16px;
      color: rgba(170, 170, 170, 1);
      text-decoration: none;
      transition: all 0.15s;
      border-bottom: 1px solid #5c5c5c;
      &.active {
        color: white;
        background: rgba(92, 92, 92, 1);
      }
      &:hover {
        cursor: pointer;
        color: white;
        background: rgba(92, 92, 92, 1);
      }
    }
  }
`;
