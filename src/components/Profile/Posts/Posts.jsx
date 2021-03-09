import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import CreatePost from "./Post/CreatePost";

function Posts(props) {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likes} views={p.views} />
  ));
  
  return (
    <section className={s.posts}>
      <h2>Posts</h2>
      <CreatePost addPost={props.addPost} />
      {postsElements}
    </section>
  );
}

export default Posts;
