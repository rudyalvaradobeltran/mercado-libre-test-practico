import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./Item/ItemSlice";

export const Store = configureStore({
  reducer: {
    itemSlice: ItemSlice,
  },
});

export default Store;