// Определение маршрутов
import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "./lib/AppRoutes.js";
//

import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import CardPage from "./pages/CardPage/CardPage.jsx";
import ExitPage from "./pages/ExitPage/ExitPage.jsx";
import SignIn from "./pages/SignInPage/SignInPage.jsx";
import SignUp from "./pages/SignUpPage/SignUpPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

import { useState } from "react";

function App() {
  const [isAuth, SetIsAuth] = useState(true);
  console.log(isAuth);
  function exitAuth() {
    SetIsAuth(false);
  }
  <Routes>
    <Route element={<PrivateRoute isAuth={isAuth} />}>
      <Route path={AppRoutes.HOME} element={<MainPage />} />
      <Route path={AppRoutes.CARD} element={<CardPage />} />
      <Route path={AppRoutes.EXIT} element={<ExitPage exitAuth={exitAuth} />} />
    </Route>

    <Route path={AppRoutes.SIGNIN} element={<SignIn />} />
    <Route path={AppRoutes.SIGNUP} element={<SignUp />} />
    <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
  </Routes>;
}
export default App;
