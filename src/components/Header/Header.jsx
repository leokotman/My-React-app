import React, { Component } from 'react';
import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <img
        src="https://img.freepik.com/free-vector/gold-lion-leo-shield-logo-icon_23758-201.jpg?size=338&ext=jpg"
        alt="leo logo"
      ></img>
      <span>Header</span>
    </header>
  );
}

export default Header;
