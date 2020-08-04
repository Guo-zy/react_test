import { createStore } from "redux";
import reducer from "./reduce";
import { combineReducers } from "redux";

const store = createStore(
  combineReducers({
    itemList: reducer,
  })
);

export default store;
