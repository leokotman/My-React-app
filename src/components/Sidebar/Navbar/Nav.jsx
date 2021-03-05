import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

function Nav() {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={s.activeLink}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName={s.activeLink}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" activeClassName={s.activeLink}>
            Dialogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" activeClassName={s.activeLink}>
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName={s.activeLink}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
