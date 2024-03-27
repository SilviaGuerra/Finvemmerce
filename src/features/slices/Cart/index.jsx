import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: {},
    cart: [],
  },
  reducers: {
    addProduct: (state, action) => {
      console.log("ADD PRODUCT redux");
      state.product = action.payload;
      let cartUpdated = false;
      state.cart = state.cart.map((item) => {
        if (item.productId === state.product.productId) {
          item.quantity++;
          cartUpdated = true;
        }
        return item;
      });
      if (!cartUpdated) {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
