// import "./App.css";
// import contacts from "./contacts.json";
import { lazy, Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
// import ContactList from "./ContactList";
// import ContactForm from "./ContactForm";
// import Filter from "./Filter";
// import s from "./Phonebook.module.css";
import AppBar from "./AppBar";
import Spinner from "./Spinner";
// import Contacts from "../views/Сontacts";
// import RegisterForm from "../views/RegisterForm";
// import LoginForm from "../views/LoginForm";
import { authOperations, authSelectors } from "../redux/auth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { ToastContainer } from "react-toastify";

// Добавляет ленивую загрузку
const HomePage = lazy(() => import("../views/HomePage"));
const RegisterForm = lazy(() => import("../views/RegisterForm"));
const LoginForm = lazy(() => import("../views/LoginForm"));
const Contacts = lazy(() => import("../views/Сontacts"));

console.log(PrivateRoute);

function App() {
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  console.log(isFetchingCurrentUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    // !isFetchingCurrentUser && (
    <div>
      {isFetchingCurrentUser ? (
        <Spinner />
      ) : (
        <>
          {/* <AppBar /> */}
          <Suspense fallback={<Spinner />}>
            <AppBar />
            <Routes>
              <Route path="/" element={<PublicRoute />}>
                <Route path="/" element={<HomePage />} />
              </Route>
              <Route
                path="/register"
                element={<PublicRoute redirectTo="/contacts" restricted />}
              >
                <Route path="/register" element={<RegisterForm />} />
              </Route>
              <Route
                path="/login"
                element={<PublicRoute redirectTo="/contacts" restricted />}
              >
                <Route path="/login" element={<LoginForm />} />
              </Route>

              <Route path="/contacts" element={<PrivateRoute />}>
                <Route path="/contacts" element={<Contacts />} />
              </Route>
            </Routes>
          </Suspense>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      )}
    </div>
    // )
  );
}

export default App;
