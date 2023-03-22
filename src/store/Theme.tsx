import { createSlice } from "@reduxjs/toolkit";

const ThemeReducer = createSlice({
  name: "theme",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = ThemeReducer.actions;

export default ThemeReducer.reducer;
