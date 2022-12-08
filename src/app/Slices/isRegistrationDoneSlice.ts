import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const isRegistrationDoneSlice = createSlice({
  name: "isRegistrationDone",
  initialState: false,
  reducers: {
    setRegistrationStatus (state, action) {
      state = action.payload;
      return state;
    },
  }
});

export const { setRegistrationStatus } = isRegistrationDoneSlice.actions;
export const isRegistrationDoneReducer = isRegistrationDoneSlice.reducer;