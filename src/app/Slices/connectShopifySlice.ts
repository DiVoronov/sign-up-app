import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const connectShopifySlice = createSlice({
  name: "connectShopify",
  initialState: false,
  reducers: {
    setConnectShopify (state, action) {
      state = action.payload;
      return state;
    },
  }
});

export const { setConnectShopify } = connectShopifySlice.actions;
export const connectShopifyReducer = connectShopifySlice.reducer;