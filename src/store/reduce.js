import { createReducer } from "@reduxjs/toolkit";
import { ADDITEM, DELETEITEM, MAREITEM } from "./actionTypes";

const defaultState = {
  list: [],
};

export default createReducer(defaultState, {
  [ADDITEM]: (state, action) => ({
    list: [...state.list, { content: action.payload.content, status: action.payload.status }],
  }),
  [DELETEITEM]: (state, action) => ({
    list: state.list.filter((item, index) => index !== action.payload),
  }),
  [MAREITEM]: (state, action) => ({
    list: state.list.map((item, index) => {
      if (index === action.payload) {
        return {
          content: item.content,
          status: !item.status,
        };
      }
      return item;
    }),
  }),
});
