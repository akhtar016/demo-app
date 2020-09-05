import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Analytics from "npm-vineet";
import "bootstrap/dist/css/bootstrap.min.css";

window.analytics = new Analytics("8041d345-dbec-4a36-bf6d-a75d497970ab");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
