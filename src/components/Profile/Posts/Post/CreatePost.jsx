import React from "react";
import s from "./CreatePost.module.css";

function CreatePost(props) {
  let newPostText = React.createRef();

  let addPost = () => {
    let text = newPostText.current.value;
    props.addPost(text);
    newPostText.current.value = "";
  };

  return (
    <div className={s.createPost}>
      <h3>New post:</h3>
      <textarea ref={newPostText} placeholder="Your new post"></textarea>
      <button onClick={addPost}>Upload</button>
    </div>
  );
}

export default CreatePost;
