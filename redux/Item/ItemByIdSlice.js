import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {},
  error: false,
};

export const itemById = createAsyncThunk("items/:id", async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/items/${id}`
  ).then((data) => data.json());
  return res;
});

export const itemByIdSlice = createSlice({
  name: "itemById",
  initialState,
  reducers: {},
  extraReducers: {
    [itemById.pending]: (state) => {
      state.loading = true;
      state.data = {};
      state.error = false;
    },
    [itemById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.error = false;
    },
    [itemById.rejected]: (state) => {
      state.loading = false;
      state.data = {};
      state.error = true;
    },
  },
});

export const itemByIdReducer = itemByIdSlice.reducer;
