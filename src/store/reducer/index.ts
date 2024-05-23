import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IssueInitialState, Item } from "../types";
import { orderLists } from "../../constant/orderListValue";

const initialState: IssueInitialState = {
  lists: orderLists,
  step: 1,
};

const sharifReducer = createSlice({
  name: "sharif",
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
        if (state.lists[index].value === 1) {
          state.lists.splice(index, 1);
        } else {
          state.lists[index].value--;
        }
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
