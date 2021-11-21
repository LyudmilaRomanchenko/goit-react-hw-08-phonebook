import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import styles from "./AppBar.module.css";
import AuthNav from "../AuthNav";
import UserMemu from "../UserMemu";
import { authSelectors } from "../../redux/auth";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Appbar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  console.log(isLoggedIn);
  console.log(!isFetchingCurrentUser);
  return (
    <AppBar position="static" sx={{ bgcolor: "#ebeded", paddingLeft: "100px" }}>
      <Toolbar>
        <Typography variant="h8" component="div" sx={{ display: "flex" }}>
          <Navigation />
          {/* {isLoggedIn && <UserMemu />}
          {!isLoggedIn && isFetchingCurrentUser && <h3>ffffffffff</h3>}
          {!isLoggedIn && !isFetchingCurrentUser && <AuthNav />} */}
          {isLoggedIn || isFetchingCurrentUser ? <UserMemu /> : <AuthNav />}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

/////////////////////////
// <header className={styles.header}>
//   <Navigation />

//   {isLoggedIn || isFetchingCurrentUser ? <UserMemu /> : <AuthNav />}
// </header>
// {
//   /* {!isLoggedIn && !isFetchingCurrentUser ? "" : <Navigation />}
//       {!isLoggedIn && isFetchingCurrentUser ? <AuthNav /> : <UserMemu />} */
// }
// {
//   /* {(isLoggedIn || isFetchingCurrentUser) && <UserMemu />} */
// }
