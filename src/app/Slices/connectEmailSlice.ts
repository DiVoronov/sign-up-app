import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const connectEmailSlice = createSlice({
  name: "connectEmail",
  initialState: false,
  reducers: {
    setConnectEmail (state, action) {
      state = action.payload;
      return state;
    },
  }
});

export const { setConnectEmail } = connectEmailSlice.actions;
export const connectEmailReducer = connectEmailSlice.reducer;