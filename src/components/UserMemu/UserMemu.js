/* eslint-disable jsx-a11y/alt-text */
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./UserMemu.module.css";
import homeImg from "../../images/home-img-1.jpg";
import { authSelectors } from "../../redux/auth";

function UserMemu() {
  const name = useSelector(authSelectors.getUserName);
  console.log(name);
  const dispatch = useDispatch();
  return (
    <div>
      <img height="60" src={homeImg}></img>
      <span>Welcom, {name}</span>
      <button type="button">Log out</button>
      {/* onClick={() => } */}
    </div>
  );
}

export default UserMemu;
