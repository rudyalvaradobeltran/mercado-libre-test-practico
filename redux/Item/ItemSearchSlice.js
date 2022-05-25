import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {},
  error: {},
};

export const itemSearch = createAsyncThunk("items/:id", async (search) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/items?q=${search}`
  ).then((data) => data.json());
  return res;
});

export const ItemSearchSlice = createSlice({
  name: 'itemSearch',
  initialState,
  reducers: {},
  extraReducers: {
    [itemSearch.pending]: (state) => {
      state.loading = true;
    },
    [itemSearch.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [itemSearch.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const ItemSearchReducer = ItemSearchSlice.reducer
