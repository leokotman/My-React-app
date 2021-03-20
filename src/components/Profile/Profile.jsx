import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./Profile_info/ProfileInfo";
import PostsContainer from "./Posts/Posts-container";

function Profile(props) {
  debugger;
  return (
    <main className={s.profile}>
      Profile
      <ProfileInfo />
      <PostsContainer
        posts={props.profilePage.posts}
        newText={props.profilePage.newText}
        dispatch={props.dispatch}
      />
    </main>
  );
}

export default Profile;
