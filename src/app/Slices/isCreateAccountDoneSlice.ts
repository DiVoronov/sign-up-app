import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const isCreateAccountDoneSlice = createSlice({
  name: "isCreateAccountDone",
  initialState: false,
  reducers: {
    setCreateAccountStatus (state, action) {
      state = action.payload;
      return state;
    },
  }
});

export const { setCreateAccountStatus } = isCreateAccountDoneSlice.actions;
export const isCreateAccountDoneReducer = isCreateAccountDoneSlice.reducer;