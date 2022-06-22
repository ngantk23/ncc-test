import React from "react";
import Article from "../../components/Article";
import { listArticles } from "./data";
import { SListArticles } from "./styles";

export default function ListArticles() {
  return (
    <SListArticles>
      {listArticles.map((i, ind) => {
        return (
          <div className="item" key={ind}>
            <Article img={i.img} content={i.content} title={i.title} />
          </div>
        );
      })}
    </SListArticles>
  );
}
