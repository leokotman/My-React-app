import React from "react";
import s from "./SendMessage.module.css";

function SendMessage(props) {
  let newMessage = React.createRef();

  let sendMessage = () => {
    alert(newMessage.current.value);
  };

  return (
    <div className={s.sendMessage}>
      <form action="">
        <label for="newPost">New message:</label>
        <input ref={newMessage} type="text" placeholder="Your message" />
        <button onClick={sendMessage}>Upload</button>
      </form>
    </div>
  );
}

export default SendMessage;
