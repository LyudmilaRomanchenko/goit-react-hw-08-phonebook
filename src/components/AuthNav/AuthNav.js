import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => (
  <nav className={s.nav}>
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
  </nav>
);

export default AuthNav;
