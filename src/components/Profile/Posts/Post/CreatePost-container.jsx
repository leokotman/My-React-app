import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../redux/profile-reducer";
import CreatePost from "./CreatePost";

function CreatePostContainer(props) {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onChangePostText = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <CreatePost
      updateNewPostText={onChangePostText}
      addPost={addPost}
      newText={props.newText}
    />
  );
}

export default CreatePostContainer;
