import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./reducer/orderReducer";
import logicReducer from "./reducer/logicReducer";

const store = configureStore({
  reducer: {
    order: orderReducer,
    logic: logicReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
