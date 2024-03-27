import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: {},
    cart: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload;
      let cartUpdated = false;
      state.cart = state.cart.map((item) => {
        if (item.id === state.product.id) {
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
