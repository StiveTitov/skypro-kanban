import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/AppRoutes";

import React from "react";
import { useState } from "react";

import { format } from "date-fns";
import Calendar from "../DayPicker/DayPicker";
import { changeCard, delCard } from "../../API";
import useTasks from "../../hooks/useTask";
import { CategoriesTheme, CategoriesThemeP } from "./PopBrowse.styled";

export default function PopBrowse() {
  const [click, setButton] = useState(true);
  const { cards, setCardsData } = useTasks();
  let { id } = useParams();
  const currentCard = cards.find((cardItem) => cardItem._id === id);

  const [selected, setSelected] = useState(currentCard.data);
  const [CardData, setCardData] = useState({
    topic: currentCard.topic,
    title: currentCard.title,
    status: currentCard.status,
    description: "",
    id: id,
  });

  let color;
  switch (currentCard.topic) {
    case "Web Design":
      color = "_orange";
      break;
    case "Copywriting":
      color = "_purple";
      break;
    case "Research":
      color = "_green";
      break;
    default:
      color = "_gray";
  }

  async function deletCard() {
    await delCard(id).then((data) => {
      setCardsData(data.tasks);
    });
  }

  const returnCardData = () => {
    setButton(true);
    console.log(click);
    console.log(currentCard);
    CardData.description = currentCard.description;
    CardData.status = currentCard.status;
    CardData.date = currentCard.date;
  };

  function onDescriptionCard(event) {
    setCardData({
      ...CardData,
      description: event.target.value,
    });
  }

  function onStatusCard(event) {
    setCardData({
      ...CardData,
      status: event.target.value,
    });
  }

  async function cardDataChange() {
    console.log(id);
    const cardData = {
      ...CardData,
      date: selected,
    };
    console.log(cardData);
    if (
      cardData.title === "" ||
      cardData.topic === "" ||
      cardData.description === ""
    ) {
      alert(
        "Вы не заполнили все поля,не выбрали категорию или не выбрали дату"
      );
      return;
    } else {
      // Обработать ошибку 400!!! Вывести алерт Заполните все поля
      await changeCard(cardData, id).then((data) => {
        console.log(data);
        setCardsData(data.tasks);
      });
    }
  }

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{currentCard.title}</h3>
              <CategoriesTheme $themeColor={color}>
                <CategoriesThemeP>{currentCard.topic}</CategoriesThemeP>
              </CategoriesTheme>
            </div>
            {click ? (
              <div className="pop-browse__status status">
                <p className="status__p subttl">Статус</p>
                <div className="status__themes">
                  <div className="status__theme _gray">
                    <p className="_gray">{currentCard.status}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="pop-browse__status status">
                <p className="status__p subttl">Статус</p>
                <div className="radio-themes">
                  <input
                    type="radio"
                    id="radio1"
                    className={
                      currentCard.status == "Без статуса"
                        ? "radio-theme _gray"
                        : "radio-theme"
                    }
                    value="Без статуса"
                    checked={CardData.status == "Без статуса" ? true : false}
                    onChange={onStatusCard}
                  />
                  <label htmlFor="radio1">Без статуса</label>

                  <input
                    type="radio"
                    id="radio2"
                    className={
                      currentCard.status == "Нужно сделать"
                        ? "status__theme _gray"
                        : "status__theme"
                    }
                    value="Нужно сделать"
                    checked={CardData.status == "Нужно сделать" ? true : false}
                    onChange={onStatusCard}
                  />
                  <label htmlFor="radio2">Нужно сделать</label>

                  <input
                    type="radio"
                    id="radio3"
                    className={
                      currentCard.status == "В работе"
                        ? "status__theme _gray"
                        : "status__theme"
                    }
                    value="В работе"
                    checked={CardData.status == "В работе" ? true : false}
                    onChange={onStatusCard}
                  />
                  <label htmlFor="radio3">В работе</label>
                  <input
                    type="radio"
                    id="radio4"
                    className={
                      currentCard.status == "Тестирование"
                        ? "status__theme _gray"
                        : "status__theme"
                    }
                    value="Тестирование"
                    checked={CardData.status == "Тестирование" ? true : false}
                    onChange={onStatusCard}
                  />
                  <label htmlFor="radio4">Тестирование</label>

                  <input
                    type="radio"
                    id="radio5"
                    className={
                      currentCard.status == "Готово"
                        ? "status__theme _gray"
                        : "status__theme"
                    }
                    value="Готово"
                    checked={CardData.status == "Готово" ? true : false}
                    onChange={onStatusCard}
                  />
                  <label htmlFor="radio5">Готово</label>
                </div>
              </div>
            )}
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                {click ? (
                  <div className="form-browse__block">
                    <label htmlFor="textArea01" className="subttl">
                      Описание задачи
                    </label>
                    <textarea
                      className="form-browse__area"
                      name="text"
                      id="textArea01"
                      readOnly="on"
                      placeholder={currentCard.description}
                    />
                  </div>
                ) : (
                  <div className="form-browse__block">
                    <label htmlFor="textArea01" className="subttl">
                      Описание задачи
                    </label>
                    <textarea
                      className="form-browse__area"
                      name="text"
                      id="textArea01"
                      defaultValue={currentCard.description}
                      value={CardData.description}
                      onChange={onDescriptionCard}
                    />
                  </div>
                )}
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <div className="calendar__block">
                  {click ? (
                    <div className="calendar__nav">
                      <Calendar />
                      <div className="nav__actions">
                        <input type="hidden" id="datepick_value" />
                        <div className="calendar__period">
                          <p className="calendar__p date-end">
                            Срок исполнения:
                            {format(new Date(currentCard.date), "dd.MM.yy")}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="calendar__nav">
                      <Calendar selected={selected} setSelected={setSelected} />
                      <div className="nav__actions">
                        <input type="hidden" id="datepick_value" />
                        <div className="calendar__period">
                          <p className="calendar__p date-end">
                            Срок исполнения:
                            {format(new Date(currentCard.date), "dd.MM.yy")}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="theme-down__categories theme-down">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
              </div>
              {click ? (
                <div className="pop-browse__btn-browse ">
                  <div className="btn-group">
                    <button
                      className="btn-browse__edit _btn-bor _hover03"
                      onClick={(event) => {
                        event.preventDefault();
                        setButton(false);
                      }}
                    >
                      Редактировать задачу
                    </button>
                    <button
                      className="btn-browse__delete _btn-bor _hover03"
                      onClick={(event) => {
                        event.preventDefault();
                        deletCard();
                      }}
                    >
                      <Link to={AppRoutes.HOME}>Удалить задачу</Link>
                    </button>
                  </div>
                  <button className="btn-browse__close _btn-bg _hover01">
                    <Link to={AppRoutes.HOME}>Закрыть</Link>
                  </button>
                </div>
              ) : (
                <div className="pop-browse__btn-edit">
                  <div className="btn-group">
                    <button
                      className="btn-edit__edit _btn-bg _hover01"
                      onClick={(event) => {
                        event.preventDefault();
                        cardDataChange(CardData);
                        setButton(true);
                      }}
                    >
                      <Link to={AppRoutes.HOME}>Сохранить</Link>
                    </button>
                    <button
                      className="btn-edit__edit _btn-bor _hover03"
                      onClick={(event) => {
                        event.preventDefault();

                        returnCardData();
                      }}
                    >
                      <Link to={`/card/${id}`}>Отменить</Link>
                    </button>

                    <button
                      className="btn-edit__delete _btn-bor _hover03"
                      id="btnDelete"
                      onClick={(event) => {
                        event.preventDefault();
                        deletCard();
                      }}
                    >
                      <Link to={AppRoutes.HOME}>Удалить задачу</Link>
                    </button>
                  </div>
                  <button className="btn-edit__close _btn-bg _hover01">
                    <Link to={AppRoutes.HOME}>Закрыть</Link>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
