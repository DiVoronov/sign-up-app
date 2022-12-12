import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const connectShopifyStoreSlice = createSlice({
  name: "connectShopifyStore",
  initialState: false,
  reducers: {
    setConnectShopifyStore (state, action) {
      state = action.payload;
      return state;
    },
  }
});

export const { setConnectShopifyStore } = connectShopifyStoreSlice.actions;
export const connectShopifyStoreReducer = connectShopifyStoreSlice.reducer;