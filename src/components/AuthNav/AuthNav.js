import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import { authSelectors } from "../../redux/auth";

function AuthNav() {
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  return (
    // !isFetchingCurrentUser && (
    <nav>
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
    // )
  );
}

export default AuthNav;
