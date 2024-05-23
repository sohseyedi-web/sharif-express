import { configureStore } from "@reduxjs/toolkit";
import sharifReducer from "./reducer/index";

const store = configureStore({
  reducer: {
    sharif: sharifReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
