import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    category: [],
  },
  reducers: {
    chosenCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { chosenCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;

export const fetchCategories = (categoryId) => (dispatch) => {
  axios
    .get(`https://fakestoreapi.com/products/category/${categoryId}`)
    .then((response) => {
      dispatch(chosenCategory(response.data));
    })
    .catch((error) => console.log(error, "errorrr"));
};
