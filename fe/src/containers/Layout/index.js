import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { SButtonMenu, SLayout } from "./styles";

export default function Layout({ children }) {
  const [open, toggleMenu] = useState(false);
  useEffect(() => {
    const menu = document.getElementsByClassName("layout-left")[0];
    if (menu) {
      if (open) {
        menu.classList.add("open-menu");
      } else menu.classList.remove("open-menu");
    }
    // const dataList = document.getElementsByClassName("tab-content-item")[0];
    // if (dataList) {
    //   if (open) dataList.classList.remove("shrink");
    //   else dataList.classList.add("shrink");
    // }
    // toggle((prev) => !prev);
  }, [open]);
  return (
    <SLayout>
      <div className="top-nav">
        <SButtonMenu
          onClick={() => toggleMenu((prev) => !prev)}
          className={open ? "button-menu menu-open" : "button-menu"}
        >
          <div class="leftright"></div>
          <div class="rightleft"></div>
        </SButtonMenu>
      </div>
      <div className="layout-left">
        <Nav />
      </div>
      <div className="layout-right">
        <div className="container">{children}</div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </SLayout>
  );
}
