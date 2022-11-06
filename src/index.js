//External Lib Import
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

//Internal Lib Import
import "./assets/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
