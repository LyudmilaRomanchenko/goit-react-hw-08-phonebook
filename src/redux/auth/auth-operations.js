/* eslint-disable import/no-anonymous-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
    } catch (error) {
      console.log(error);
    }
  }
);

// export const addContact = (name, number) => async (dispatch) => {
//   const contact = {
//     name,
//     number,
//   };

//   dispatch(addContactsRequest());

//   try {
//     const { data } = await axios.post("/contacts", contact);
//     dispatch(addContactsSuccsess(data));
//   } catch (error) {
//     dispatch(addContactsError(error));
//   }

//   //   axios
//   //     .post("/contacts", contact)
//   //     .then(({ data }) => dispatch(addContactsSuccsess(data)))
//   //     .catch((error) => dispatch(addContactsError(error)));
// };

// export const deleteContact = (contactId) => async (dispatch) => {
//   dispatch(deleteContactsRequest());

//   try {
//     axios.delete(`/contacts/${contactId}`);
//     dispatch(deleteContactsSuccsess(contactId));
//   } catch (error) {
//     dispatch(deleteContactsError(error));
//   }
// };

// export default { addContact, fetchContacts, deleteContact };
