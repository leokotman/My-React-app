import React, {Component} from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import CreatePost from "./Post/CreatePost";

function Posts() {
  return (
    <section className={s.posts}>
      Posts
      <CreatePost />
      <Post message="Hey how are you?" likes="50" views="200" />
      <Post message="It's my first post" likes="100" views="500" />
    </section>
  );
}

export default Posts;
