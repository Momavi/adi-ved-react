import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
  user: {
    id: String;
    name: String;
    pet: String;
    phone: String;
    email: String;
    jwt: String;
  };
}

const initialState: PopupState = {
  user: {
    id: "",
    name: "",
    pet: "",
    phone: "",
    email: "",
    jwt: "",
  },
};

export const { actions, reducer } = createSlice({
  name: "MedCard",
  initialState,
  reducers: {},
});

export const {} = actions;
export default reducer;
