import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {},
  error: {},
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
    },
    [itemById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [itemById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const itemByIdReducer = itemByIdSlice.reducer;
