import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import s from "./Messages.module.css";

function Dialog(props) {
  return (
  <div className={s.dialog + ' ' + s.active}>
    <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
  </div>);
}

function CurrentDialog(props) {
  return (<div className={s.message}>{props.message}</div>);
}

function Messages() {
  return (
    <div className={s.messages}>
      <section className={s.dialogs}>
        Dialogs
        <Dialog name='Leo' id='1'/>
        <Dialog name='Jes' id='2'/>
        <Dialog name='Mum' id='3'/>
        <Dialog name='Gra' id='4'/>
        <Dialog name='Alex' id='5'/>
      </section>
      <section className={s.currentDialog}>
        Current dialog
        <CurrentDialog message='Hi' />
        <CurrentDialog message='How are you?' />
        <CurrentDialog message="Let's meet tomorrow, bro" />
      </section>
    </div>
  );
}

export default Messages;
