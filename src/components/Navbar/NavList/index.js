import React from "react";
import List from "./style";

const NavList = () => {
  return (
    <List>
      <li className="nav--active">
        <a href="?">Ana Sayfa</a>
      </li>
      <li>
        <a href="?">Diziler</a>
      </li>
      <li>
        <a href="?">Filmler</a>
      </li>
      <li>
        <a href="?">Yeni ve Popüler</a>
      </li>
      <li>
        <a href="?">Listem</a>
      </li>
    </List>
  );
};

export default NavList;
