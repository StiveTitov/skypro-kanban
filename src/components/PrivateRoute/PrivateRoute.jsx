import React from "react";
import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../lib/AppRoutes";

function PrivateRoute({ children, isAuth }) {
  return isAuth ? children : <Navigate to={AppRoutes.SIGNIN} />;
}
export default PrivateRoute;
