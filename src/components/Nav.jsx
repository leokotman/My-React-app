import React, {Component} from "react";
import s from "./Nav.module.css";

function Nav() {
  return (
    <nav className={s.nav}>
      Menu
      <ul>
        <li>Profile</li>
        <li>News</li>
        <li>Messages</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
}

export default Nav;
