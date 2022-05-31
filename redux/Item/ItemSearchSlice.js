import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {},
  error: false,
};

export const itemSearch = createAsyncThunk("items/search", async (search) => {
  const res = await fetch(`/api/items?q=${search}`).then((data) => {
    return data.json();
  });
  return res;
});

export const ItemSearchSlice = createSlice({
  name: "itemSearch",
  initialState,
  reducers: {},
  extraReducers: {
    [itemSearch.pending]: (state) => {
      state.loading = true;
      state.data = {};
      state.error = false;
    },
    [itemSearch.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.error = false;
    },
    [itemSearch.rejected]: (state) => {
      state.loading = false;
      state.data = {};
      state.error = true;
    },
  },
});

export const itemSearchReducer = ItemSearchSlice.reducer;
