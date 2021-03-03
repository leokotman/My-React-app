import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

let posts = [
  {id: 1, message: "Hey how are you?", likes: 50, views: 200},
  {id: 2, message: "It's my second post", likes: 30, views: 100},
  {id: 3, message: "Yo what's up guys?", likes: 60, views: 300},
];

let dialogs = [
  {id: 1, name: "Leo"},
  {id: 2, name: "Jes"},
  {id: 3, name: "Mum"},
  {id: 4, name: "Gra"},
  {id: 5, name: "Alex"},
];
let messages = [
  {id: 1, message: "Hi"},
  {id: 2, message: "How are you?"},
  {id: 3, message: "Let's meet tomorrow, bro"},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}  />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
