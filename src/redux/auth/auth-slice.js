import { createSlice } from "@reduxjs/toolkit";
import { register } from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const auhtSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
  },
});
