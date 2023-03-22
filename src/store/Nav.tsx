import { createSlice } from "@reduxjs/toolkit";

const navReducer = createSlice({
  name: "nav",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = navReducer.actions;

export default navReducer.reducer;
