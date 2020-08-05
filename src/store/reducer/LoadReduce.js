import { createReducer } from "@reduxjs/toolkit";
import { LOADING_TOGGLE } from "../action/actionTypes";

const defalutState = {
  loading: false,
};

export default createReducer(defalutState, {
  [LOADING_TOGGLE]: (state, action) => ({ loading: action.value }),
});
