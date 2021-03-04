import React, {Component} from "react";
import s from "./ProfileInfo.module.css";

function ProfileInfo() {
  return (
    <div>
      <img
        src="https://images.all-free-download.com/images/graphicthumb/beautiful_cat_picture_6_168770.jpg"
        alt="cat"
      ></img>
      <p className={s.profileInfo}>avatar + description</p>
    </div>
  );
}

export default ProfileInfo;
