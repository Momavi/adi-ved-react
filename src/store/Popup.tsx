import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
  sign: boolean;
  priceTable: boolean;
}

const initialState: PopupState = {
  sign: false,
  priceTable: false,
};

export const { actions, reducer } = createSlice({
  name: "Popup",
  initialState,
  reducers: {
    showSign(state) {
      return { ...state, sign: !state.sign };
    },
    showPriceTable(state) {
      return { ...state, priceTable: !state.priceTable };
    },
  },
});

export const { showSign, showPriceTable } = actions;
export default reducer;
