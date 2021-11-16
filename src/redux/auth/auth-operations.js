/* eslint-disable import/no-anonymous-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";
// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const register = createAsyncThunk("auth/register", async (credentials) => {
  // "https://connections-api.herokuapp.com/users/signup"
  try {
    const { data } = await axios.post(
      "https://connections-api.herokuapp.com/users/signup",
      credentials
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }

  // try {
  //   const { data } = await axios.get(
  //     "https://api.themoviedb.org/3/trending/all/day?api_key=cdc3559cea174c9b75b98956c9a389b5"
  //   );
  //   console.log("gggggggg", data);
  //   return data;
  // } catch (error) {
  //   console.log(error);
  // }

  // fetch("https://connections-api.herokuapp.com/users/signup", credentials)
  //   .then((response) => {
  //     response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     return data;
  //   });
});

const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post(
      "https://connections-api.herokuapp.com/users/login",
      credentials
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

const operations = {
  register,
  // logOut,
  login,
  // fetchCurrentUser,
};
export default operations;

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
