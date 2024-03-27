import { createSlice } from "@reduxjs/toolkit";

const loginUserSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    pass: "",
    login: false,
  },
  reducers: {
    dataEmail: (state, action) => {
      state.email = action.payload;
    },
    dataPass: (state, action) => {
      state.pass = action.payload;
    },
    dataLogin: (state, action) => {
      state.login = action.payload;
    },
    reset: (state) => {
      state.pass = "";
      state.email = "";
      state.login = false;
    },
  },
});

export const { dataEmail, dataPass, dataLogin, reset } = loginUserSlice.actions;
export default loginUserSlice.reducer;
