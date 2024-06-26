import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderInitialState, Item } from "../types";
import { orderLists } from "../../constant/orderListValue";

const initialState: OrderInitialState = {
  lists: orderLists,
  step: 1,
};

const sharifReducer = createSlice({
  name: "order",
  initialState,
  reducers: {
    addingOrderItem: (state, action: PayloadAction<Item>) => {
      const itemIndex = state.lists.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.lists[itemIndex] = {
          ...state.lists[itemIndex],
          value: (state.lists[itemIndex].value += 1),
        };
      } else {
        const tempProduct = { ...action.payload, value: 1 };
        state.lists.push(tempProduct);
      }
    },
    removeOrderItem(state, action: PayloadAction<Item>) {
      const index = state.lists.findIndex((i) => i.id === action.payload.id);
      if (index !== -1) {
        state.lists[index].value--;
      }
    },
    addingStep: (state, action: PayloadAction<number>) => {
      state.step = state.step + action.payload;
    },
    decreaseStep: (state, action: PayloadAction<number>) => {
      state.step = state.step - action.payload;

    },
    clearOrder(state) {
      state.lists.forEach((i) => (i.value = 0));
    },
  },
});

export const {
  addingOrderItem,
  addingStep,
  decreaseStep,
  removeOrderItem,
  clearOrder,
} = sharifReducer.actions;

export default sharifReducer.reducer;
