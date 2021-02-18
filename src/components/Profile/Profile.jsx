import React, {Component} from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./Profile_info/ProfileInfo";
import Posts from "./Posts/Posts";

function Profile() {
  return (
    <main className={s.profile}>
      <img
        src="https://images.all-free-download.com/images/graphicthumb/beautiful_cat_picture_6_168770.jpg"
        alt="cat"
      ></img>
      Profile
      <ProfileInfo />
      <Posts />
    </main>
  );
}

export default Profile;
