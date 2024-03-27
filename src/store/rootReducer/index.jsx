import { combineReducers } from "redux";
import showProductsSlice from "../slices/AllProducts";
import loginUserSlice from "../slices/Login";
import cartSlice from "../slices/Cart";
import categoriesSlice from "../slices/Categories";

const rootReducer = combineReducers({
  showProducts: showProductsSlice,
  login: loginUserSlice,
  cart: cartSlice,
  categories: categoriesSlice,
});

export default rootReducer;
