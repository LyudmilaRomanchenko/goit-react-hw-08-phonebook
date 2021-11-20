import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const notify = (message) =>
  toast(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

// import { useSelector, useDispatch } from "react-redux";
// import authSelectors from "./auth-selector";

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
      // "https://connections-api.herokuapp.com/users/signup",
      "/users/signup",

      credentials
    );
    // console.log("hhhh", data);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
    notify("Maybe this email is taken!");
    return Promise.reject(new Error());
    // toast.error(error.message);
  }
});
// async function fetchTrending() {
//   const response = await fetch(urlTrending);
//   if (response.ok) {
//     return await response.json();
//   }
//   return Promise.reject(new Error("No selection of trending films!"));
// }

const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post(
      // "https://connections-api.herokuapp.com/users/login",
      "/users/login",

      credentials
    );
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
    notify("Email or password is not correct!");
    return Promise.reject(new Error());
  }
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    // await axios.post("https://connections-api.herokuapp.com/users/logout");
    await axios.post("/users/logout");

    token.unset();
  } catch (error) {
    console.log(error);
    return Promise.reject(new Error());
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(persistedToken);
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get(
        // "https://connections-api.herokuapp.com/users/current"
        "/users/current"
      );
      return data;
    } catch (error) {
      console.log(error);
      return Promise.reject(new Error());
    }
  }
);

// const fetchCurrentUser = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       console.log("Токена нет, уходим из fetchCurrentUser");
//       return thunkAPI.rejectWithValue();
//     }

//     token.set(persistedToken);
//     try {
//       const { data } = await axios.get("/users/current");
//       return data;
//     } catch (error) {
//       // TODO: Добавить обработку ошибки error.message
//     }
//   }
// );

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
  notify,
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
