import { combineReducers } from "redux";
import showProductsSlice from "../slices/AllProducts";
import loginUserSlice from "../slices/Login";
import cartSlice from "../slices/Cart";

const rootReducer = combineReducers({
  showProducts: showProductsSlice,
  login: loginUserSlice,
  cart: cartSlice,
});

export default rootReducer;
