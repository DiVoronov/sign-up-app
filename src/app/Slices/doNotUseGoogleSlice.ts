import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const doNotUseGoogleSlice = createSlice({
  name: "doNotUseGoogle",
  initialState: false,
  reducers: {
    setDoNotUseGoogle (state, action) {
      state = action.payload;
      return state;
    },
  }
});

export const { setDoNotUseGoogle } = doNotUseGoogleSlice.actions;
export const doNotUseGoogleReducer = doNotUseGoogleSlice.reducer;