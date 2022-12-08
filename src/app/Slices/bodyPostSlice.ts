import React from "react";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  name: string | null
  email: string | null
  password: string | null
  shop_token: string | null
  google_token: string | null
};

const initialState: IInitialState = {
  name: null,
  email: null,
  password: null,
  shop_token: null,
  google_token: null,
};

const bodyPostSlice = createSlice({
  name: "bodyPost",
  initialState,
  reducers: {
    setName (state, action) {
      state.name = action.payload;
      return state;
    },
    setEmail (state, action) {
      state.email = action.payload;
      return state;
    },
    setPassword (state, action) {
      state.password = action.payload;
      return state;
    },
    setShopToken (state, action) {
      state.shop_token = action.payload;
      return state;
    },
    setGoogleToken (state, action) {
      state.google_token = action.payload;
      return state;
    },
  }
});

export const { 
  setName, 
  setEmail, 
  setPassword, 
  setShopToken, 
  setGoogleToken,
} = bodyPostSlice.actions;

export const bodyPostReducer = bodyPostSlice.reducer;