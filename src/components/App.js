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
// import Contacts from "../views/Сontacts";
// import RegisterForm from "../views/RegisterForm";
// import LoginForm from "../views/LoginForm";
import { authOperations } from "../redux/auth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// Добавляет ленивую загрузку
const HomePage = lazy(() => import("../views/HomePage"));
const RegisterForm = lazy(() => import("../views/RegisterForm"));
const LoginForm = lazy(() => import("../views/LoginForm"));
const Contacts = lazy(() => import("../views/Сontacts"));

console.log(PrivateRoute);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <AppBar />
      {/* <Suspense fallback={<Spinner />}> */}
      <Suspense fallback={<h3>Loading</h3>}>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          {/* <Route path="register" element={<RegisterForm />} /> */}
          <Route
            path="/register"
            element={<PublicRoute redirectTo="/register" restricted />}
          >
            <Route path="/register" element={<RegisterForm />} />
          </Route>
          {/* <Route path="login" element={<LoginForm />} /> */}
          <Route
            path="/login"
            element={<PublicRoute redirectTo="/login" restricted />}
          >
            <Route path="/login" element={<LoginForm />} />
          </Route>

          <Route path="/contacts" element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
