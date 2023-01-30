import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: 'Not authenticated',
  },
  reducers: {
    updateAuth: (state, action) => {
      console.log('state.value: ', state.value)
      console.log('action.payload: ', action.payload)
      state.value = action.payload;
    },
  },
});

export const { updateAuth } = authSlice.actions;

export default authSlice.reducer;