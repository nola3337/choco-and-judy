import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentProduct: {},
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setEditProduct(state, action) {
      state.currentProduct = action.payload;
    },
  },
});

export default ProductSlice.reducer;

export const ProductActions = ProductSlice.actions;
