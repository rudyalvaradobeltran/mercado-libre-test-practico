import { configureStore } from "@reduxjs/toolkit";
import { ItemSearchReducer } from "./Item/ItemSearchSlice";

export const Store = configureStore({
  reducer: {
    itemSearch: ItemSearchReducer,
  }
});

export default Store;
