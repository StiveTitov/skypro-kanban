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
  

  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  
  
  // async function setAuth(loginData) {
  //   await login(loginData).then((data) => {
  //     localStorage.setItem("user", JSON.stringify(data.user)); // Сохраняем в локальное хранилище данные, которые пришли с сервера
  //     setUser(JSON.parse(localStorage.getItem("user"))); //Получаем данные из локального хранилища
  //     navigate(AppRoutes.HOME);
      
  //   });
  // }
  // async function setRegistration(loginData) {
  //   await regisreation(loginData).then((data) => {
  //     localStorage.setItem("user", JSON.stringify(data.user)); // Сохраняем в локальное хранилище данные, которые пришли с сервера
  //     setUser(JSON.parse(localStorage.getItem("user"))); //Получаем данные из локального хранилища
  //     navigate(AppRoutes.HOME);
  //   });
  // }

  // function exit() {
  //   localStorage.removeItem("user");
  //   setUser(null);
  //   navigate(AppRoutes.SIGNIN);
  // }

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
