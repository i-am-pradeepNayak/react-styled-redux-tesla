import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cars: ['Model S', 'Model 3', 'Model X', 'Model Y']
};

const store = createSlice({
  name: 'pradeep',
  initialState,
  reducers: {}
});

export const { increment } = store.actions;
export default store.reducer;
