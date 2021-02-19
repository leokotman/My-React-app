import React, {Component} from "react";
import s from "./Settings.module.css";

function Settings() {
  return (
    <div>
      <h3>Settings</h3>
      <div>
        Notifications volume
        <input type="range" step="5" />
      </div>
      <div>
        Turn off notifications till:
        <input type="datetime-local" />
      </div>
      <div>
        Upload avatar
        <input type="file" />
      </div>
    </div>
  );
}

export default Settings;
