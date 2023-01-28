import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    value: '/',
  },
  reducers: {
    goToPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { goToPage } = navigationSlice.actions;

export default navigationSlice.reducer;