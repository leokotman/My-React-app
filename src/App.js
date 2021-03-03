import React, {Component} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
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
          <Route
            render={() => <Profile posts={props.posts} />}
            exact
            path="/profile"
          />
          <Route
            render={() => (
              <Dialogs messages={props.messages} dialogs={props.dialogs} />
            )}
            path="/dialogs"
          />

          <Route component={Music} path="/music" />
          <Route component={News} path="/news" />
          <Route component={Settings} path="/settings" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
