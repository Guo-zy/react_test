import React from "react";
import ToDoListContainer from "./components/ToDoListContainer/ToDoListContainer";
import { HashRouter, Route } from "react-router-dom";
import ToDoFinish from "./components/ToDoFinish/ToDoFinish";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/" component={ToDoListContainer}></Route>
        <Route path="/finished" component={ToDoFinish}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
