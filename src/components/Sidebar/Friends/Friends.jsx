import React, {Component} from "react";
import s from "./Friends.module.css";

function Friends(props) {
  return (
    <div className={s.friends}>
      <img src={props.img} alt="avatar"></img>
      <span>{props.name}</span>
    </div>
  );
}

export default Friends;
