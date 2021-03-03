import React, {Component} from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import CreatePost from "./Post/CreatePost";

function Posts(props) {
  debugger;
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likes} views={p.views} />
  ));

  return (
    <section className={s.posts}>
      Posts
      <CreatePost />
      {postsElements}
    </section>
  );
}

export default Posts;
