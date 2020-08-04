import { createReducer } from "@reduxjs/toolkit";
import { ADDITEM, DELETEITEM, MAREITEM } from "./actionTypes";

const defaultState = {
  list: [],
};

export default createReducer(defaultState, {
  [ADDITEM]: (state, action) => ({
    list: [...state.list, { id : action.payload.id , content: action.payload.content, status: action.payload.status }],
  }),
  [DELETEITEM]: (state, action) => ({
    list: state.list.filter((item) => item.id !== action.payload),
  }),
  [MAREITEM]: (state, action) => ({
    list: state.list.map((item) => {
      if (action.payload === item.id) {
        return {
          id:item.id,
          content: item.content,
          status: !item.status,
        };
      }
      return item;
    }),
  }),
});
