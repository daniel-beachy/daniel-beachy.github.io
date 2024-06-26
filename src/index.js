import React from "react";
import ReactDOM from "react-dom/client";
import "./custom.scss";
import Homepage from "./components/Homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
