import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import state from "./redux/state";
import {addPost} from "./redux/state";

// addPost("New post test");
// addPost("Again post test");
// addPost("Last post test");

ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
