import React from "react";
import s from "./CreatePost.module.css";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../redux/profile-reducer";

function CreatePost(props) {
  let newPostText = React.createRef();

  //убрали привязку к окну ввода и берём из state данных
  // из функции updateNewPostText - newText добавляется
  let addPost = () => {
    // props.addPost(); заменяем на (добавляем action creator)
    props.dispatch(addPostActionCreator());
  };

  let onChangePostText = () => {
    let text = newPostText.current.value;
    let action = updateNewPostTextActionCreator(text);
    // props.updateNewPostText(text); заменяем на
    props.dispatch(action);
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
      <button onClick={addPost}>Upload</button>
    </div>
  );
}

export default CreatePost;
