// import "./App.css";
// import contacts from "./contacts.json";
import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import ContactList from "./ContactList";
// import ContactForm from "./ContactForm";
// import Filter from "./Filter";
// import s from "./Phonebook.module.css";
import AppBar from "./AppBar";
import Contacts from "../views/Сontacts";
import RegisterForm from "../views/RegisterForm";
import LoginForm from "../views/LoginForm";

// Добавить ленивую загрузку ///////////////////////////////////////////
const HomePage = lazy(() => import("../views/HomePage"));
// const MoviesPage = lazy(() => import("./views/MoviesPage"));
// const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage"));

function App() {
  return (
    <div>
      <AppBar />
      {/* <Suspense fallback={<Spinner />}> */}
      <Suspense fallback={<h3>Loading</h3>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
