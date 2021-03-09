import React from "react";

function CreatePost(props) {
  let newPostText = React.createRef();

  let addPost = () => {
    let text = newPostText.current.value;
    props.addPost(text);
  };

  return (
    <div>
      <h3>New post:</h3>
      <textarea ref={newPostText} placeholder="Write something"></textarea>
      <button onClick={addPost}>Upload</button>
    </div>
  );
}

export default CreatePost;
