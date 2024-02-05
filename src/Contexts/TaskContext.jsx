import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../lib/AppRoutes";

export const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [cards, setCards] = useState(null);
  const navigate = useNavigate();

function setCardsData (newCards) {
setCards(newCards);
navigate(AppRoutes.HOME);
}

  return (
    <TaskContext.Provider value={{ cards, setCardsData }}>
      {children}
    </TaskContext.Provider>
  );
}
