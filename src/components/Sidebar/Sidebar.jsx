import React, {Component} from "react";
import s from "./Sidebar.module.css";
import Friends from "./Friends/Friends";

function Sidebar(props) {
  let friendsElements = props.state.friends.map((friend) => (
    <Friends name={friend.name} id={friend.id} img={friend.img} />
  ));
  return (
    <section className={s.sidebar}>
      <h3>Friends</h3>
      {friendsElements}
    </section>
  );
}

export default Sidebar;
