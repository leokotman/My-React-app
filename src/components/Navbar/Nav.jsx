import React, {Component} from "react";
import s from "./Nav.module.css";
import Profile from "../Profile/Profile";
import Messages from "../Messages/Messages";

function Nav() {
  return (
    <nav className={s.nav}>
      Menu
      <ul>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a>News</a>
        </li>
        <li>
          <a href="/messages">Messages</a>
        </li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
}

export default Nav;
