import React, {Component} from "react";
import s from "./CreatePost.module.css";

function CreatePost() {
  return (
    <form action="">
      <label for="newPost">New post:</label>
      <input id="newPost" type="text" placeholder="Write something" />
      <button type="submit">Upload</button>
    </form>
  );
}

export default CreatePost;
