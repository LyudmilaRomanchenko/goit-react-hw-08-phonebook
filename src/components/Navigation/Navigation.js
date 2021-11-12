import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink
      //   exact
      to="/"
      className={({ isActive }) => (isActive ? s.activeLink : s.link)}
    >
      Home
    </NavLink>

    <NavLink
      //   exact
      to="/register"
      className={({ isActive }) => (isActive ? s.activeLink : s.link)}
    >
      Register
    </NavLink>

    <NavLink
      to="/login"
      className={({ isActive }) => (isActive ? s.activeLink : s.link)}
    >
      Login
    </NavLink>

    <NavLink
      to="/contacts"
      className={({ isActive }) => (isActive ? s.activeLink : s.link)}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;

// className={({ isActive }) => isActive ? "red" : "blue"}
