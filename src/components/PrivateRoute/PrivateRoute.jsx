
import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../../lib/AppRoutes";


function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to={AppRoutes.SIGNIN} />;
}
export default PrivateRoute;
