import React, {Component} from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import CreatePost from "./Post/CreatePost";

function Posts() {
  return (
    <section className={s.posts}>
      Posts
      <CreatePost />
      <Post />
      <Post />
      <Post />
    </section>
  );
}

export default Posts;
