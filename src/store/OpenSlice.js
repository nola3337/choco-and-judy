import { createSlice } from "@reduxjs/toolkit";

const initialState = { menu: false };

const OpenSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    toggleMenu(state) {
      return { ...state, menu: !state.menu };
    },
  },
});

export default OpenSlice.reducer;

export const OpenActions = OpenSlice.actions;
