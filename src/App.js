import React, {Component} from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div>
        <Profile />
        <Messages />
      </div>
    </div>
  );
}

export default App;
