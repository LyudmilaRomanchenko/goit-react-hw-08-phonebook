import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import styles from "./AppBar.module.css";
import AuthNav from "../AuthNav";
import UserMemu from "../UserMemu";
import { authSelectors } from "../../redux/auth";

export default function Appbar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  console.log(isLoggedIn);
  console.log(!isFetchingCurrentUser);
  return (
    <header className={styles.header}>
      <Navigation />
      {/* {!isLoggedIn && !isFetchingCurrentUser ? "" : <Navigation />}
      {!isLoggedIn && isFetchingCurrentUser ? <AuthNav /> : <UserMemu />} */}
      {/* {(isLoggedIn || isFetchingCurrentUser) && <UserMemu />} */}

      {isLoggedIn || isFetchingCurrentUser ? <UserMemu /> : <AuthNav />}

      {/* <UserMemu />
      <AuthNav /> */}
    </header>
  );
}
