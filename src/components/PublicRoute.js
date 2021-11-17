/* eslint-disable no-lone-blocks */
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { authSelectors } from "../redux/auth";

function PublicRoute({ restricted = false, redirectTo = "/" }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  return !shouldRedirect ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default PublicRoute;

///////////////// Props /////////////////////////////////////////
{
  /* <h3>jjjjjjjj</h3>; */
}
