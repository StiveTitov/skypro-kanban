import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../lib/AppRoutes";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  async function login(user) {
    localStorage.setItem("user", JSON.stringify(user)); // Сохраняем в локальное хранилище данные, которые пришли с сервера
    setUser(JSON.parse(localStorage.getItem("user"))); //Получаем данные из локального хранилища
    navigate(AppRoutes.HOME);
  }
  async function Card(user) {
    localStorage.setItem("user", JSON.stringify(user)); // Сохраняем в локальное хранилище данные, которые пришли с сервера
    setUser(JSON.parse(localStorage.getItem("user"))); //Получаем данные из локального хранилища
    navigate(AppRoutes.HOME);
  }

  function exit() {
    localStorage.removeItem("user");
    setUser(null);
    navigate(AppRoutes.SIGNIN);
  }
  return (
    <UserContext.Provider value={{ user, login, exit, Card }}>
      {children}
    </UserContext.Provider>
  );
}
