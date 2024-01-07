import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";

import "../../../src/App.css";
import { cardList } from "../../data";

import Wrapper from "../../components/warpper/Wrapper";

import PopNewCard from "../CardPage/CardPage";
import PopBrowse from "../../components/pop/PopBrowse";

import Header from "../../components/header/Header";

import Main from "../../components/main/Main";

import { GlobalStyle } from "../../components/common/Common.styled";


function MainPage() {
  const [cards, setCards] = useState(cardList); // список карточек из data.js помещаем в переменную cards,
  // это нужно для работы хука

  //const [theme, setTheme] = useState("light"); // Состояние для переключения тем

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
  }, []); // Пустой массив зависимостей для запуска только при монтировании компонента

  // Функция для переключения темы
  //const toggleTheme = () => {
  //if (theme === "light") {
  //setTheme("dark");
  //} else {
  //  setTheme("light");
  //}
  //};

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
      <GlobalStyle />
      <Wrapper>
      
          <Header addCard={addCard} />
          {isLoading ? (
            <div className="loading"> Данные загружаются...</div>
          ) : (
            <Main cards={cards} />
          )}
        <Outlet />
      </Wrapper>
    </>
  );
}

export default MainPage;
