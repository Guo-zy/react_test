import { ADDITEM, DELETEITEM, MAREITEM, GETALLITEM } from "./actionTypes";
import { createAction } from "@reduxjs/toolkit";

export const addAction = createAction(ADDITEM, (dataList) => ({
  payload: {
    id: dataList.id,
    content: dataList.content,
    status: dataList.status,
  },
}));

export const deleteAction = createAction(DELETEITEM, (id) => ({
  payload: id,
}));

export const markAction = createAction(MAREITEM, (id) => ({ payload: id }));

export const getAllItemAction = createAction(GETALLITEM, (dataList) => ({
  payload:dataList
}));
