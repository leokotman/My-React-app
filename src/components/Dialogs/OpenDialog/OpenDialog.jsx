import React, {Component} from "react";
import s from "./../Dialogs.module.css";

function OpenDialog(props) {
  return <div className={s.message}>{props.message}</div>;
}

export default OpenDialog;
