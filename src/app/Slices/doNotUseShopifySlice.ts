import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const doNotUseShopifySlice = createSlice({
  name: "doNotUseShopify",
  initialState: false,
  reducers: {
    setDoNotUse (state, action) {
      state = action.payload;
      return state;
    },
  }
});

export const { setDoNotUse } = doNotUseShopifySlice.actions;
export const doNotUseShopifyReducer = doNotUseShopifySlice.reducer;