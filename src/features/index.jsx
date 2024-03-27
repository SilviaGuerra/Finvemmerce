import { configureStore } from "@reduxjs/toolkit";
import showProductsSlice from "./slices/AllProducts";
import loginUserSlice from "./slices/Login";

export const store = configureStore({
  reducer: {
    showProducts: showProductsSlice,
    login: loginUserSlice,
  },
});
