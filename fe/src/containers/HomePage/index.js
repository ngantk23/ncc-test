import React from "react";
import ListArticles from "./ListArticles";
import { SHome } from "./styles";
import logo from "../../assets/images/logo.png";
export default function Home() {
  return (
    <SHome>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="description">
        <h1 className="header">Lorem ipsum dolor sit asmet?</h1>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </div>
      </div>
      <ListArticles />
    </SHome>
  );
}
