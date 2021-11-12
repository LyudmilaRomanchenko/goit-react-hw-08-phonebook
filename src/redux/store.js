/* eslint-disable import/no-anonymous-default-export */
// import { createStore, combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import contacts from "./contacts/contacts-reducer";

const myMiddleWare = (store) => (next) => (action) => {
  console.log("Моя прослойка", action);

  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  myMiddleWare,
  logger,
];

const store = configureStore({
  reducer: {
    contacts: contacts,
  },
  middleware,
  // указываем, что devtools нужны только при разработке
  devTools: process.env.NODE_ENV === "development",
});

export default store;

// Без toolkit
// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import contacts from "./reducer";

// const rootReducer = combineReducers({
//   contacts: contacts,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

// console.log(rootReducer);
// console.log(store);
