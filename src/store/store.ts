import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./reducer/orderReducer";
import themeReducerReducer from "./reducer/themeReducer";

const store = configureStore({
  reducer: {
    order: orderReducer,
    theme: themeReducerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
