import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { SLayout } from "./styles";

export default function Layout({ children }) {
  return (
    <SLayout>
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
