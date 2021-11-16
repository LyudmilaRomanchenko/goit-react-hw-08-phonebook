import { createSlice } from "@reduxjs/toolkit";
// import { register, login } from "./auth-operations";
import authOperations from "./auth-operations";

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
// };

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

console.log(initialState.user);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    [authOperations.register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
  },
});

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   extraReducers: {
//     [authOperations.register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [authOperations.login.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     // [authOperations.logOut.fulfilled](state, action) {
//     //   state.user = { name: null, email: null };
//     //   state.token = null;
//     //   state.isLoggedIn = false;
//     // },
//     // [authOperations.fetchCurrentUser.fulfilled](state, action) {
//     //   state.user = action.payload;
//     //   state.isLoggedIn = true;
//     // },
//   },
// });

console.log(authSlice.reducer);

export default authSlice.reducer;
