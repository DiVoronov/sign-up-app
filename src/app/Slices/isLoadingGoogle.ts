import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const isLoadingGoogleSlice = createSlice({
  name: "isLoadingGoogle",
  initialState: false,
  reducers: {
    setLoadingGoogle (state, action) {
      state = action.payload;
      return state;
    },
  }
});

export const { setLoadingGoogle } = isLoadingGoogleSlice.actions;
export const isLoadingGoogleReducer = isLoadingGoogleSlice.reducer;