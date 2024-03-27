import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const showProductsSlice = createSlice({
  name: "productos",
  initialState: {
    results: [],
    details: {},
    chosenProduct: [],
  },
  reducers: {
    resultsProducts: (state, action) => {
      state.results = action.payload;
    },
    details: (state, action) => {
      state.details = action.payload;
    },
    chosenProduct: (state, action) => {
      state.chosen = action.payload;
    },
  },
});

export const { details, resultsProducts, chosenProduct } =
  showProductsSlice.actions;

export default showProductsSlice.reducer;

export const fetchAllproducts = () => (dispatch) => {
  axios
    .get(`https://fakestoreapi.com/products?limit=4`)
    .then((response) => {
      dispatch(resultsProducts(response.data));
    })
    .catch((error) => console.log(error, "errorrr"));
};

export const fetchItemDetails = (id) => (dispatch) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      dispatch(details(response.data));
    })
    .catch((error) => console.log(error, "error"));
};
