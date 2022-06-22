import React from "react";
import { SNav } from "./styles";

export default function Nav() {
  const listLink = ["Home", "Services", "News", "Blog", "Contact"];
  return (
    <SNav>
      <div className="menu">
        {listLink.map((item, ind) => {
          return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              href="#"
              key={ind}
              className={ind === 0 ? "menu-item active" : "menu-item"}
            >
              {item}
            </a>
          );
        })}
      </div>
    </SNav>
  );
}
