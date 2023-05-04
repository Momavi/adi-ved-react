import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
  reception: boolean;
  priceTable: boolean;
}

const initialState: PopupState = {
  reception: false,
  priceTable: false,
};

export const { actions, reducer } = createSlice({
  name: "Popup",
  initialState,
  reducers: {
    showReception(state) {
      return { ...state, reception: !state.reception };
    },
    showPriceTable(state) {
      return { ...state, priceTable: !state.priceTable };
    },
  },
});

export const { showReception, showPriceTable } = actions;
export default reducer;
