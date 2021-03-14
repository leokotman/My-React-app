import React from "react";
import s from "./SendMessage.module.css";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/state";

function SendMessage(props) {
  let newMessage = React.createRef();

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  let onChangeMessageText = () => {
    let text = newMessage.current.value;
    let action = updateNewMessageActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.sendMessage}>
     <h3>New message:</h3> 
     <textarea ref={newMessage} placeholder="Your message" onChange={onChangeMessageText} value={props.newMessage} />
     <button onClick={sendMessage}>Upload</button>
    </div>
  );
}

export default SendMessage;
