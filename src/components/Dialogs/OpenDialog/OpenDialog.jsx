import React from "react";
import s from "./OpenDialog.module.css";

function OpenDialog(props) {
  return <div className={s.message}>{props.message}</div>;
}

export default OpenDialog;
