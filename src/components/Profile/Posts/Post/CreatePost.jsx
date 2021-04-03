import React from "react";
import s from "./CreatePost.module.css";

function CreatePost(props) {
  let newPostText = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onChangePostText = () => {
    let text = newPostText.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.createPost}>
      <h3>New post:</h3>
      <textarea
        ref={newPostText}
        onChange={onChangePostText}
        value={props.newText}
        placeholder="Your new post"
      />
      <button onClick={onAddPost}>Upload</button>
    </div>
  );
}

export default CreatePost;
