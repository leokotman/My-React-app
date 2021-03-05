import React, {Component} from "react";
import s from "./Music.module.css";

function Music() {
  return (
    <div className={s.music}>
      <h2>Music</h2>
      <audio controls></audio>
    </div>
  );
}

export default Music;
