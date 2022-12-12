import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
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
    setNamePost (state, action) {
      state.name = action.payload;
      console.log(state.name);
      
      return state;
    },
    setEmailPost (state, action) {
      state.email = action.payload;
      console.log(state.email);

      return state;
    },
    setPasswordPost (state, action) {
      state.password = action.payload;
      console.log(state.password);

      return state;
    },
    setShopTokenPost (state, action) {
      state.shop_token = action.payload;
      console.log(state.shop_token);

      return state;
    },
    setGoogleTokenPost (state, action) {
      state.google_token = action.payload;
      console.log(state.google_token);

      return state;
    },
  }
});

export const { 
  setNamePost, 
  setEmailPost, 
  setPasswordPost, 
  setShopTokenPost, 
  setGoogleTokenPost,
} = bodyPostSlice.actions;

export const bodyPostReducer = bodyPostSlice.reducer;