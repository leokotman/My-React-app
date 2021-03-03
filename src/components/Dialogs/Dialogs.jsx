import React, {Component} from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import OpenDialog from "./OpenDialog/OpenDialog";

function Dialogs(props) {
  //из данных делаем разметку с помощью метода .map
  let dialogsElements = props.dialogs.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.messages.map((m) => (
    <OpenDialog message={m.message} />
  ));

  return (
    <div className={s.messages}>
      <section className={s.dialogs}>
        Dialogs
        {dialogsElements}
      </section>
      <section className={s.currentDialog}>
        Current dialog
        {messagesElements}
      </section>
    </div>
  );
}

export default Dialogs;
