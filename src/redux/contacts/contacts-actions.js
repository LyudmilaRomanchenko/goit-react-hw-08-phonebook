/* eslint-disable import/no-anonymous-default-export */
import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addContactsRequest = createAction("contacts/addContactsRequest");
export const addContactsSuccsess = createAction("contacts/addContactsSuccsess");
export const addContactsError = createAction("contacts/addContactsError");

export const deleteContactsRequest = createAction(
  "contacts/deleteContactsRequest"
);
export const deleteContactsSuccsess = createAction(
  "contacts/deleteContactsSuccsess"
);
export const deleteContactsError = createAction("contacts/deleteContactsError");

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccsess = createAction(
  "contacts/fetchContactsSuccsess"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");

export const changeFilter = createAction("contacts/changeFilter");

// const addContact = createAction("contact/add", (name, number) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));

// const deleteContact = createAction("contacts/delete");

// export default { addContact, deleteContact, changeFilter };

// Без toolkit
// import { v4 as uuidv4 } from "uuid";
// import types from "./types";

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = (conactId) => ({
//   type: types.DELETE,
//   payload: conactId,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// export default { addContact, deleteContact, changeFilter };
