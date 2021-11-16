import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import styles from "./AppBar.module.css";
import AuthNav from "../AuthNav";
import UserMemu from "../UserMemu";
import { authSelectors } from "../../redux/auth";

export default function Appbar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMemu /> : <AuthNav />}
      {/* <UserMemu />
      <AuthNav /> */}
    </header>
  );
}
