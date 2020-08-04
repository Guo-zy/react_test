import { ADDITEM, DELETEITEM, MAREITEM } from "./actionTypes";
import { createAction } from "@reduxjs/toolkit";

export const addAction = createAction(ADDITEM, (inputValue) => ({
  payload: inputValue,
}));

export const deleteAction = createAction(DELETEITEM, (index) => ({
  payload: index,
}));

export const markAction = createAction(MAREITEM, (index) => ({ payload: index }));
