import React from "react";
import s from "./Sidebar.module.css";
import Friends from "./Friends/Friends";
import Nav from "./Navbar/Nav";

function Sidebar(props) {
  debugger;
  let friendsElements = props.sidebar.friends.map((friend) => (
    <Friends name={friend.name} id={friend.id} img={friend.img} />
  ));
  return (
    <section className={s.sidebar}>
      <div className={s.menu}>
        <h3>Menu</h3>
        <Nav />
      </div>
      <div className={s.friends}>
        <h3>Friends</h3>
        {friendsElements}
      </div>
    </section>
  );
}

export default Sidebar;
