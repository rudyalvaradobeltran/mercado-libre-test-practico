import { createSlice } from '@reduxjs/toolkit';
import { ThunkDispatch as Dispatch } from 'redux-thunk';

const initialState = {
  loading: false,
  data: {},
  error: {}
};

export const ItemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    init: (state) => {
      state.loading = true
    },
    success: (state, { payload }) => {
      state.loading = false
      state.data = payload
      state.error = {}
    },
    failure: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
});

export const { init, success, failure } = ItemSlice.actions;
export const selectItem = (state) => state.item;
export default ItemSlice.reducer;

export function fetchItem(search) {
  return async (dispatch) => {
    try {
      dispatch(init());
      await stall();
      if (search !== '') {
        dispatch(success({ search }));
      } else {
        dispatch(failure());
      }
    } catch (error) {
      dispatch(failure({ message: error }));
    }
  }
};

async function stall(stallTime = 3000) {
  await new Promise((resolve) => setTimeout(resolve, stallTime));
};