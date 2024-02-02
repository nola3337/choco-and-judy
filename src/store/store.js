import { configureStore } from "@reduxjs/toolkit";

import OpenReducer from "./OpenSlice";

const store = configureStore({
  reducer: {
    open: OpenReducer,
  },
});

export default store;
