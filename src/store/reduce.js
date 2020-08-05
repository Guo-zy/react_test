import { createReducer } from "@reduxjs/toolkit";
import { ADDITEM, DELETEITEM, MAREITEM, GETALLITEM } from "./actionTypes";

const defaultState = {
  list: [],
};

//TODO
export default createReducer(defaultState, {
  [GETALLITEM]: (state, action) => ({
    list: action.payload,
  }),
  [ADDITEM]: (state, action) => ({
    list: [action.payload,...state.list,],
  }),
  [DELETEITEM]: (state, action) => ({
    list: state.list.filter((item) => item.id !== action.payload.id),
  }),
  [MAREITEM]: (state, action) => ({
    list: state.list.map((item) => {
      if (action.payload.id === item.id) {
        return {
          id: item.id,
          content: item.content,
          status: !item.status,
        };
      }
      return item;
    }),
  }),
});
