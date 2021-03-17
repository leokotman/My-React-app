import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import OpenDialog from "./OpenDialog/OpenDialog";
import SendMessage from "./SendMessage/SendMessage";

function Dialogs(props) {
  //из данных делаем разметку с помощью метода .map
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
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
        <SendMessage
          dispatch={props.dispatch}
          newMessage={props.dialogsPage.newMessage}
        />
      </section>
    </div>
  );
}

export default Dialogs;
