import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
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
        <Sidebar sidebar={props.state.sidebar} />
        <div className="Main">
          <Route
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
            path="/profile"
          />
          <Route
            render={() => (
              <Dialogs
                dialogsPage={props.state.dialogsPage}
                dispatch={props.dispatch}
              />
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