import React, {Component} from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

function Nav() {
  return (
    <nav className={s.nav}>
      Menu
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={s.activeLink}>
            
            Profile
          
          </NavLink>
        </li>
        <li>
          <a>News</a>
        </li>
        <li>
          <NavLink to="/messages" activeClassName={s.activeLink}>Messages</NavLink>
        </li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
}

export default Nav;
