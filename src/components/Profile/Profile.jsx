import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./Profile_info/ProfileInfo";
import Posts from "./Posts/Posts";

function Profile(props) {
  return (
    <main className={s.profile}>
      Profile
      <ProfileInfo />
      <Posts posts={props.state.posts} addPost={props.addPost} />
    </main>
  );
}

export default Profile;
