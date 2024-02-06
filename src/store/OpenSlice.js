import { createSlice } from "@reduxjs/toolkit";

const initialState = { menu: false, member: false };

const OpenSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    toggleMenu(state) {
      return { ...state, menu: !state.menu };
    },
    toggleMember(state) {
      return { ...state, member: !state.member };
    },
  },
});

export default OpenSlice.reducer;

export const OpenActions = OpenSlice.actions;
