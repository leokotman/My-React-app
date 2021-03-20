import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import CreatePostContainer from "./Post/CreatePost-container";

function PostsContainer(props) {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likes} views={p.views} />
  ));

  return (
    <section className={s.posts}>
      <h2>Posts</h2>
      <CreatePostContainer dispatch={props.dispatch} newText={props.newText} />
      {postsElements}
    </section>
  );
}

export default PostsContainer;
