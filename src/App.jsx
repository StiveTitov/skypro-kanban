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
  const [cards, setCards] = useState(cardList);

  function addCard() {
    // Логика добавления карточки
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
