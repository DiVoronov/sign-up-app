import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const identificationGoogleSlice = createSlice({
  name: "identificationGoogle",
  initialState: false,
  reducers: {
    setIdentificationGoogle (state, action) {
      state = action.payload;
      return state;
    },
  }
});

export const { setIdentificationGoogle } = identificationGoogleSlice.actions;
export const identificationGoogleReducer = identificationGoogleSlice.reducer;