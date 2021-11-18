import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { authSelectors } from "../redux/auth";

// console.log(Redirect);

function PrivateRoute() {
  // console.log(redirectTo);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  console.log(isLoggedIn);

  // return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
