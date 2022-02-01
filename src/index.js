import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import store from "./redux/store/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
