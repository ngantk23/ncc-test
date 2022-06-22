import styled from "styled-components";

export const SHome = styled.div`
  .logo {
    width: 310px;
    margin: 22px auto 28px;
    img {
      max-width: 100%;
    }
  }
  .description {
    background: rgba(239, 239, 239, 1);
    padding: 38px;
    margin-bottom: 40px;
    .header {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      margin: 0;
      margin-bottom: 18px;
      padding: 0;
    }
    .content {
      width: 972px;
      max-width: 80%;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      margin: 0 auto;
    }
  }
`;

export const SListArticles = styled.div`
  display: flex;
  margin-left: -25px;
  margin-right: -25px;
  .item{
    margin: 0 25px;
  }
`;
