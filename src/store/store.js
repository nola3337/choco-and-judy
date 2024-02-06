import { configureStore } from "@reduxjs/toolkit";

import OpenReducer from "./OpenSlice";
import ProductReducer from "./ProductSlice";

const store = configureStore({
  reducer: {
    open: OpenReducer,
    product: ProductReducer,
  },
});

export default store;
