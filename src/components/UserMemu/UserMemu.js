/* eslint-disable jsx-a11y/alt-text */
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./UserMemu.module.css";
import homeImg from "../../images/home-img-1.jpg";
import { authSelectors, authOperations } from "../../redux/auth";

function UserMemu() {
  const email = useSelector(authSelectors.getUserEmail);
  console.log(email);
  const dispatch = useDispatch();
  // const onLogOut = () => dispatch(authOperations.logOut());
  return (
    <div>
      {/* <img height="60" src={homeImg}></img> */}
      <span>Welcom, {email}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}

export default UserMemu;
