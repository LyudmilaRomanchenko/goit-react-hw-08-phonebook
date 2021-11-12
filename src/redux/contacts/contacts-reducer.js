import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addContactsSuccsess,
  deleteContactsSuccsess,
  fetchContactsSuccsess,
  changeFilter,
} from "./contacts-actions";

const items = createReducer([], {
  [fetchContactsSuccsess]: (state, { payload }) => payload,
  [addContactsSuccsess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccsess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (state, { payload }) => payload,
});

const initialState = combineReducers({
  items,
  filter,
});

export default initialState;

// Без toolkit
// import { combineReducers } from "redux";
// import actions from "./actions";
// import types from "./types";

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter((contact) => contact.id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

// const initialState = combineReducers({
//   items,
//   filter,
// });

// export default initialState;
