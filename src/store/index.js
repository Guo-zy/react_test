import { createStore } from "redux";
import ToDoReduce from "./reducer/ToDoReduce";
import LoadReduce from "./reducer/LoadReduce"
import { combineReducers } from "redux";

const store = createStore(
  combineReducers({
    toDo: ToDoReduce,
    loadToggle : LoadReduce
  })
);

export default store;
