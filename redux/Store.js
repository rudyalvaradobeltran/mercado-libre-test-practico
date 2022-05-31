import { configureStore } from "@reduxjs/toolkit";
import { itemSearchReducer } from "./Item/ItemSearchSlice";
import { itemByIdReducer } from "./Item/ItemByIdSlice";

export const Store = configureStore({
  reducer: {
    itemSearch: itemSearchReducer,
    itemById: itemByIdReducer,
  },
});

export default Store;
