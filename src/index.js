import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ToDoList from "./ToDoList";

// PWA progressive web application
// 借助网页去写手机的APP应用
// service worker是在后台运行的一个线程，可以用来处理离线缓存、消息推送、后台自动更新等任务。
// 网页部署在HTTPs协议的服务器上，当用户第一次访问这个网页，需要网络。
// 如果引用了serviceWorker，即使用户断网，第二次也依然能够访问在这个网页。
import * as serviceWorker from './serviceWorker';

//JSX语法
//要引用react来解析JSX语法
ReactDOM.render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
