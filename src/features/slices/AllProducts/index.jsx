import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const showProductsSlice = createSlice({
  name: "productos",
  initialState: {
    results: [],
    details: {},
  },
  reducers: {
    details: (state, action) => {
      state.details = action.payload;
    },
    resultsProducts: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { details, resultsProducts } = showProductsSlice.actions;

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
  console.log("ID?", id);
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      console.log("RESPONSE DETAIL", response);
      dispatch(details(response.data));
    })
    .catch((error) => console.log(error, "error"));
};
