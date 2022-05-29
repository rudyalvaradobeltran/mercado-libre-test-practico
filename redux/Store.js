import { configureStore } from "@reduxjs/toolkit";
import { ItemSearchReducer } from "./Item/ItemSearchSlice";
import { itemByIdReducer } from "./Item/ItemByIdSlice";

export const Store = configureStore({
  reducer: {
    itemSearch: ItemSearchReducer,
    itemById: itemByIdReducer
  }
});

export default Store;
