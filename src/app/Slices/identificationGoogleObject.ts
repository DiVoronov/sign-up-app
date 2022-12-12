import React from "react";
import { createSlice } from "@reduxjs/toolkit";

interface IGoogleEmailItemSliceProps {
  title: string | null
  color: string | null
  children: React.ReactNode | null
};

const initialState: IGoogleEmailItemSliceProps = {
  title: null,
  color: null,
  children: null,
};

const identificationGoogleObjectSlice = createSlice({
  name: "identificationGoogleObject",
  initialState,
  reducers: {
    setIdentificationGoogleObject (state, action) {
      state = action.payload;
      return state;
    },
    setIdentificationGoogleObjectNull (state, action) {
      state = initialState;
      return state;
    },
  }
});

export const { setIdentificationGoogleObject, setIdentificationGoogleObjectNull } = identificationGoogleObjectSlice.actions;
export const identificationGoogleObjectReducer = identificationGoogleObjectSlice.reducer;