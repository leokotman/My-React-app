import React from "react";

function CreatePost(props) {
  let newPostText = React.createRef();

  let addPost = () => {
    alert(newPostText.current.value);
  };

  return (
    <form action="">
      <label for="newPost">New post:</label>
      <input
      
         ref={newPostText}
     
          id="newPost"
    
           type="text"
  
             placeholder="Write something"

           />
      <button onClick={addPost}>
        
        Upload
      
      </button>
    </form>
  );
}

export default CreatePost;
