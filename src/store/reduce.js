import { createReducer } from "@reduxjs/toolkit";
import { ADDITEM, DELETEITEM, MAREITEM } from "./actionTypes";

const defaultState = {
  list: [],
};

export default createReducer(defaultState, {
  [ADDITEM]: (state, action) => ({
    list: [...state.list, { inputValue: action.payload, done: false }],
  }),
  [DELETEITEM]: (state, action) => ({
    list: state.list.filter((item, index) => index !== action.payload),
  }),
  [MAREITEM]: (state, action) => ({
    list: state.list.map((item, index) => {
      if (index === action.payload) {
        return {
          inputValue: item.inputValue,
          done: !item.done,
        };
      }
      return item;
    }),
  }),
});
