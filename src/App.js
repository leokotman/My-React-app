import React, {Component} from "react";
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
