import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Sidebar/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar state={props.state.sidebar} />
        <div>
          <Route
            render={() => <Profile state={props.state.profilePage} />}
            exact
            path="/profile"
          />
          <Route
            render={() => <Dialogs state={props.state.dialogsPage} />}
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
