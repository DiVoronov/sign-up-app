import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const isAlertActiveSlice = createSlice({
  name: "isAlertActive",
  initialState: false,
  reducers: {
    setAlertActive (state, action) {
      state = action.payload;
      return state;
    },
  }
});

export const { setAlertActive } = isAlertActiveSlice.actions;
export const isAlertActiveReducer = isAlertActiveSlice.reducer;