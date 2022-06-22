import React from "react";
import styled from "styled-components";

export default function Article({ img, content, title }) {
  return (
    <Styles>
      <h2 className="title">{title}</h2>
      <div className="content">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="text">{content}</div>
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }
  .content {
    .img {
      height: 128px;
      height: 128px;
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: center center;
      }
      float: left;
    }
    .text {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      /* float: left; */
      /* clear: both; */
    }
  }
  &::after {
    display: block;
    content: "";
    clear: both;
  }
  @media screen and (max-width: 1199px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 25px;
    .title {
      margin-bottom: 10px;
    }
    .content {
      .img {
        height: 100px;
        height: 100px;
      }
      .text {
        font-size: 15px;
      }
    }
  }
`;
