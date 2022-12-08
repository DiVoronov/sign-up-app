import React from "react";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  name: string | null
  email: string | null
  password: string | null
};

const initialState: IInitialState = {
  name: null,
  email: null,
  password: null,
};

const welcomeCreateAccountSlice = createSlice({
  name: "welcomeCreateAccount",
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
  }
});

export const { setName, setEmail, setPassword } = welcomeCreateAccountSlice.actions;
export const welcomeCreateAccountReducer = welcomeCreateAccountSlice.reducer;