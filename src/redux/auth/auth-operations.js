import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post(
      "https://connections-api.herokuapp.com/users/signup",
      credentials
    );
    // console.log("hhhh", data);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post(
      "https://connections-api.herokuapp.com/users/login",
      credentials
    );
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("https://connections-api.herokuapp.com/users/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persustedToken = state.auth.token;
    console.log(persustedToken);
    if (persustedToken === null) {
      return;
    }

    token.set(persustedToken);

    const response = axios.get(
      "https://connections-api.herokuapp.com/users/current"
    );
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
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
