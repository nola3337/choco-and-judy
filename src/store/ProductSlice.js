import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "001",
      name: "巧克力餅乾",
      type: "經典餅乾",
      price: 330,
      isHot: "yes",
      description: "123",
    },
  ],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addNewProduct(state, action) {
      const newProduct = {
        id: Math.random(),
        name: action.payload.name,
        type: action.payload.type,
        price: action.payload.price,
        isHot: action.payload.isHot,
        description: action.payload.description,
      };

      state.products.push(newProduct);
    },
  },
});

export default ProductSlice.reducer;

export const ProductActions = ProductSlice.actions;
