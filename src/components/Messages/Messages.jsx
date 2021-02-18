import React, {Component} from "react";
import s from "./Messages.module.css";

function Messages() {
  return (
    <div className={s.messages}>
      <section>
        Dialogs
        <div>user 1</div>
        <div>user 2</div>
      </section>
      <section>Current dialog</section>
    </div>
  );
}

export default Messages;
