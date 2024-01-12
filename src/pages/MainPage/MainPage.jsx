import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";

import "../../../src/App.css";
import { cardList } from "../../data";

import { getCardsFromAPI } from "../../lib/API";

import Wrapper from "../../components/warpper/Wrapper";

import PopNewCard from "../CardPage/CardPage";
import PopBrowse from "../../components/pop/PopBrowse";

import Header from "../../components/header/Header";

import Main from "../../components/main/Main";

import { GlobalStyle } from "../../components/common/Common.styled";

function MainPage() {
  // Делаю запрос для проверки работы с API

  const [cards, setCards] = useState(); // список карточек из запроса (getCardsFromAPI) помещаем в переменную cards,
  // это нужно для работы хука

  //const [theme, setTheme] = useState("light"); // Состояние для переключения тем

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
    getCardsFromAPI().then((tasks) => {
      console.log(tasks.tasks);
      setCards(tasks.tasks);// Полученый массив из tasks передаем в фунуцию setCards для дальнейшего вывода
        });
  }, []); // Пустой массив зависимостей для запуска только при монтировании компонента

  // Функция для переключения темы
  //const toggleTheme = () => {
  //if (theme === "light") {
  //setTheme("dark");
  //} else {
  //  setTheme("light");
  //}
  //};

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
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
