import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    status: 'idle',
    order: null,
  },
  reducers: {
    checkoutStart: (state) => {
      state.status = 'loading';
    },
    checkoutSuccess: (state, action) => {
      state.status = 'succeeded';
      state.order = action.payload;
    },
    checkoutFailed: (state) => {
      state.status = 'failed';
    },
  },
});

export const { checkoutStart, checkoutSuccess, checkoutFailed } = checkoutSlice.actions;
export default checkoutSlice.reducer;
