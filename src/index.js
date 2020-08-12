import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/index";
import { Provider } from "react-redux";
import "antd/dist/antd.css";

//JSX语法
//要引用react来解析JSX语法
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
