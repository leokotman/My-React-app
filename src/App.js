import React, {Component} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import Music from './components/Music/Music';
import News from "./components/News/News";
import Settings from './components/Settings/Settings';

function App(props) {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <div>
            <Route component={Profile} path='/profile' />
            <Route component={Messages} path='/messages' />
            <Music/>
            <News/>
            <Settings/>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
