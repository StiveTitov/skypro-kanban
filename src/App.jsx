import React, { useState, useEffect } from "react";
import "./App.css";
import { cardList } from "./data";

import Wrapper from "./components/warpper/Wrapper.jsx";
import PopExit from "./components/pop/PopExit.jsx";
import PopNewCard from "./components/pop/PopNewCard.jsx";
import PopBrowse from "./components/pop/PopBrowse.jsx";

import Header from "./components/header/Header.jsx";

import Main from "./components/main/Main";

//import {  GlobalStyle, ThemeProvider, lightTheme, darkTheme} from "./components/Global/Global.styled.js";

//import { Button, DangerButton } from "./components/Button/Button.styled.js"; // Импортируем

function App() {
  const [cards, setCards] = useState(cardList); // список карточек из data.js помещаем в переменную cards,
  // это нужно для работы хука

  const [theme, setTheme] = useState("light"); // Состояние для переключения тем

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
  }, []); // Пустой массив зависимостей для запуска только при монтировании компонента

  // Функция для переключения темы
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  function addCard() {
    // Логика добавления карточки
    const newCard = {
      id: cards.length + 1, // id новой карточки получается прибавлением единицы к длине массива
      theme: "Research",
      color: "green",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]); // увеличиваем список карточек на одну новую карточку, обязательно с помощью spread
  }

  return (
    <>
      <Wrapper>
        <PopExit />

        <PopNewCard />

        <PopBrowse />

        <Header addCard={addCard} />
        {isLoading ? (
          <div className="loading"> Данные загружаются...</div>
        ) : (
          <Main cards={cards} />
        )}
      </Wrapper>
    </>
  );
}

export default App;
