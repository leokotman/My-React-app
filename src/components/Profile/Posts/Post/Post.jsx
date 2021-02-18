import React, {Component} from "react";
import s from "./Post.module.css";

function Post(props) {
  return (
    <article className={s.myPost}>
      <div>{props.message}</div>
      <span>Likes: {props.likes}, </span>
      <span>Views: {props.views}</span>
    </article>
  );
}

export default Post;
