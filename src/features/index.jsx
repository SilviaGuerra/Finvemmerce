import { configureStore } from "@reduxjs/toolkit";
import showProductsSlice from "./slices/AllProducts";

export const store = configureStore({
  reducer: {
    showProducts: showProductsSlice,
  },
});
