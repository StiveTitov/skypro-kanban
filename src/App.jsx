import React, { useState } from "react";
import "./App.css";
import { cardList } from "./data";

import Wrapper from "./components/warpper/Wrapper.jsx";
import PopExit from "./components/pop/PopExit.jsx";
import PopNewCard from "./components/pop/PopNewCard.jsx";
import PopBrowse from "./components/pop/PopBrowse.jsx";

import Header from "./components/header/Header.jsx";

import Main from "./components/main/Main";

function App() {
  const [cards, setCards] = useState(cardList); // список карточек из data.js помещаем в переменную cards,
  // это нужно для работы хука
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
    setCards([...cards, newCard]); // увеличиваем список карточек на одну новую карточку
  }

  return (
    <>
      <Wrapper>
        <PopExit />

        <PopNewCard />

        <PopBrowse />

        <Header addCard={addCard} />

        <Main cards={cards} />
      </Wrapper>
    </>
  );
}

export default App;
