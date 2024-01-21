import { createContext, useState } from "react";
import {useNavigate} from "react-router-dom";
import { AppRoutes } from "../lib/AppRoutes";


export const TaskContext = createContext(null)

export function TaskProvider ({children}){
    const [card, setTask]=useState(null)
    const navigate = useNavigate();

    async function Card(card) {
        
          localStorage.setItem("card", JSON.stringify(card)); // Сохраняем в локальное хранилище данные, которые пришли с сервера
          setTask(JSON.parse(localStorage.getItem("card"))); //Получаем данные из локального хранилища
          navigate(AppRoutes.HOME);
          
        
      }

    //   function exit() {
    //     localStorage.removeItem("user");
    //     setUser(null);
    //     navigate(AppRoutes.SIGNIN);
    //   }
      return(
        <TaskContext.Provider value={{Card}}>{children}</TaskContext.Provider>
      )
}