import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LogicInitialState } from "../types";

const initialState: LogicInitialState = {
  active: window.innerWidth > 1024,
};

const logicReducer = createSlice({
  name: "logic",
  initialState,
  reducers: {
    updateMedia: (state) => {
      state.active = window.innerWidth > 1024;
    },
    changeActive: (state, action: PayloadAction<boolean>) => {
      state.active = action.payload;
    },
  },
});

export const { updateMedia,changeActive } = logicReducer.actions;

export default logicReducer.reducer;
