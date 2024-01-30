// Определение маршрутов
import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "./lib/AppRoutes.js";
//

import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import CardPage from "./pages/CardPage/CardPage.jsx";
import NewCard from "./pages/CardPage/NewCard.jsx";
import ExitPage from "./pages/ExitPage/ExitPage.jsx";
import SignIn from "./pages/SignInPage/SignInPage.jsx";
import SignUp from "./pages/SignUpPage/SignUpPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";





function App() {
  
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={AppRoutes.HOME} element={<MainPage />}>
        <Route path={AppRoutes.CARD} element={<CardPage />} />
        <Route path={AppRoutes.ADD_CARD} element={<NewCard />} />
        <Route path={AppRoutes.EXIT} element={<ExitPage />} />
        </Route>
      </Route>

      
      <Route path={AppRoutes.SIGNIN} element={<SignIn />} />
      <Route
        path={AppRoutes.SIGNUP}
        element={<SignUp />}
      />
      <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
export default App;
