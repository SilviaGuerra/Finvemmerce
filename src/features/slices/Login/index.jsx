import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loginUserSlice = createSlice({
  name: "login",
  initialState: {
    token: "",
    userId: null,
  },
  reducers: {
    dataLogin: (state, action) => {
      state.token = action.payload;
      state.userId = 1;
    },
    reset: (state) => {
      state.token = "";
    },
  },
});

export const { dataLogin, reset } = loginUserSlice.actions;
export default loginUserSlice.reducer;

export const fetchLoginUser = (state) => (dispatch) => {
  axios
    .post(`https://fakestoreapi.com/auth/login`, {
      username: state.username,
      password: state.password,
    })
    .then((response) => {
      console.log("REsponse", response);
      dispatch(dataLogin(response.data.token));
    })
    .catch((error) => console.log(error, "error"));
};
