import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage';
import rootReducer from "./rootReducer";
import persistConfig from "./persistConfig";

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // reducer: {
  //   showProducts: showProductsSlice,
  //   login: loginUserSlice,
  //   cart: cartSlice,
  // },
});
