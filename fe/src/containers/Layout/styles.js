import styled from "styled-components";

export const SFooter = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #3e3e3e;
  border-top: 1px solid rgba(222, 222, 222, 1);
  padding: 30px 0;

  @media screen and (max-width: 767px) {
    padding: 15px 0;
    font-size: 15px;
  }
`;

export const SLayout = styled.div`
  .top-nav {
    display: none;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: 20px 10px;
    padding-right: 30px;
    /* background-color: #393535c9; */
    background-color: #191718;
    .button-menu {
      transform: translateY(-8px);
      margin-left: auto;
      margin-right: 0px;
    }
    @media screen and (max-width: 991px) {
      display: block;
    }
  }
  @media screen and (max-width: 1850px) {
    padding-left: 150px;
  }
  @media screen and (max-width: 991px) {
    padding-left: 0px;
  }
  .layout-left {
    position: fixed;
    top: 0%;
    left: 0;
    width: 150px;
    background: #191718;
    height: 100vh;
    @media screen and (max-width: 991px) {
      left: -150px;
      opacity: 0;
      transition: all 0.2s;
      &.open-menu {
        left: 0;
        opacity: 1;
        z-index: 10;
      }
    }
  }
  .layout-right {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 991px) {
      padding-top: 100px;
    }

    .footer {
      padding-left: 150px;
      padding-right: 150px;
      margin-top: 100px;
      @media only screen and (max-width: 1850px) {
        padding: 0 50px;
      }
      @media screen and (max-width: 991px) {
        padding-left: 0;
        padding-right: 0;
      }
      @media screen and (max-width: 767px) {
        margin-top: 50px;
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
  .top-nav {
    /* display: none; */
    @media screen and (max-width: 991px) {
      display: block;
      position: fixed;
      top: 0%;
      left: 0;
    }
  }
  @media screen and (max-width: 991px) {
    margin-top: 70px;
  }
`;

export const SButtonMenu = styled.div`
  position: relative;
  margin: auto;
  width: 30px;
  height: 30px;
  cursor: pointer;
  .leftright {
    height: 4px;
    width: 30px;
    position: absolute;
    margin-top: 24px;
    background-color: white;
    border-radius: 2px;
    transform: rotate(-0deg) translateY(6px);
    transition: all 0.15s ease-in;
  }

  .rightleft {
    height: 4px;
    width: 30px;
    position: absolute;
    margin-top: 24px;
    background-color: white;
    border-radius: 2px;
    transform: rotate(0deg) translateY(-6px);
    transition: all 0.15s ease-in;
  }
  &.menu-open {
    .leftright {
      background-color: white;
      transform: rotate(45deg);
    }
    .rightleft {
      background-color: white;
      transform: rotate(-45deg);
    }
  }
`;
