import { ADDITEM, DELETEITEM, MAREITEM } from "./actionTypes";
import { createAction } from "@reduxjs/toolkit";

export const addAction = createAction(ADDITEM, (dataList) => ({
  payload: {
    content : dataList.content,
    status : dataList.status,
  },
})); 



export const deleteAction = createAction(DELETEITEM, (index) => ({
  payload: index,
}));

export const markAction = createAction(MAREITEM, (index) => ({ payload: index }));
