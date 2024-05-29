import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LogicInitialState } from "../types";

const initialState: LogicInitialState = {
  active: window.innerWidth > 1024,
  darkMode : (localStorage.getItem('theme') as 'light' | 'dark') || 'light',
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
    setDark: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.darkMode = action.payload;
      localStorage.setItem('theme', action.payload);

    },
    toggleDarkMode: (state) => {
      state.darkMode = state.darkMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.darkMode);
    },
  },
});

export const { updateMedia,changeActive,setDark,toggleDarkMode } = logicReducer.actions;

export default logicReducer.reducer;
