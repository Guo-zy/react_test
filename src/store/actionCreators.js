import { ADDITEM, DELETEITEM, MAREITEM, GETALLITEM } from "./actionTypes";
import { createAction } from "@reduxjs/toolkit";

export const addAction = createAction(ADDITEM, (item) => ({
  payload: item,
}));

export const deleteAction = createAction(DELETEITEM, (item) => ({
  payload: item,
}));

export const markAction = createAction(MAREITEM, (item) => ({ payload: item }));

export const getAllItemAction = createAction(GETALLITEM, (dataList) => ({
  payload: dataList,
}));
