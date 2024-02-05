import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";

import "../../../src/App.css";

import { getCardsFromAPI } from "../../lib/API";

import Wrapper from "../../components/warpper/Wrapper";

import Header from "../../components/header/Header";

import Main from "../../components/main/Main";

import { GlobalStyle } from "../../components/common/Common.styled";
import useUser from "../../hooks/useUser";
import PopBrowse from "../../components/pop/PopBrowse";
import useTasks from "../../hooks/useTask";

function MainPage() {
  // Делаю запрос для проверки работы с API

  
  //const [theme, setTheme] = useState("light"); // Состояние для переключения тем

  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();
  const { setCardsData } = useTasks();

  useEffect(() => {
    getCardsFromAPI({user}).then((data) => {
      
      setCardsData(data.tasks); // Полученый массив из tasks передаем в фунуцию setCards для дальнейшего вывода
      
      setIsLoading(false);
    });
  }, [user]); // Пустой массив зависимостей для запуска только при монтировании компонента

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
          <div className="loading">
            <img src="/images/circle-loading-gif.gif" />
          </div>
        ) : (
          <Main />
        )}
        <Outlet />
      </Wrapper>
    </>
  );
}

export default MainPage;
