import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router basename="/choco-and-judy">
      <App />
    </Router>
  </Provider>
);
