import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../lib/AppRoutes";
import Calendar from "../DayPicker/DayPicker";
import { useState } from "react";
import { addNewCard } from "../../lib/API";
import MainPage from "../../pages/MainPage/MainPage";

import useUser from "../../hooks/useUser";

export default function PopNewCard() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const { Card } = useUser();
  const [newCardData, setNewCardData] = useState({
    topic: "",

    description: "",
    date: "",
  });

  function onTitleNewCard(event) {
    setNewCardData({
      ...newCardData,
      title: event.target.value,
    });
  }

  function onDescriptionNewCard(event) {
    setNewCardData({
      ...newCardData,
      description: event.target.value,
    });
  }

  function onTopicNewCard(event) {
    setNewCardData({
      ...newCardData,
      topic: event.target.value,
    });
  }
  async function addCard(newCardData) {
    console.log(newCardData);
    setNewCardData({
      ...newCardData,
      date: selected,
    });

    await addNewCard(newCardData);
  }

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a className="pop-new-card__close"></a>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus=""
                    value={newCardData.title}
                    onChange={onTitleNewCard}
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    defaultValue={""}
                    value={newCardData.description}
                    onChange={onDescriptionNewCard}
                  />
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <div className="calendar__block">
                  <div className="calendar__nav">
                    <Calendar selected={selected} setSelected={setSelected}>
                      <p className="calendar__p date-end">
                        Выберете срок исполнения{" "}
                        <span className="date-control"></span>
                      </p>
                    </Calendar>
                  </div>

                  <input
                    type="hidden"
                    id="datepick_value"
                    defaultValue="08.09.2023"
                  />
                  <div className="calendar__period">
                    <p className="calendar__p date-end">
                      Выберите срок исполнения <span className="date-control" />
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                {/*<div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>*/}
                <input
                  type="radio"
                  id="radio1"
                  className="radios"
                  value="Web Design"
                  onChange={onTopicNewCard}
                />
                <label htmlFor="radio1">Web Design</label>

                <input
                  type="radio"
                  id="radio2"
                  className="radios"
                  value="Research"
                  onChange={onTopicNewCard}
                />
                <label htmlFor="radio2">Research</label>

                <input
                  type="radio"
                  id="radio3"
                  className="radios"
                  value="Copywriting"
                  onChange={onTopicNewCard}
                />
                <label htmlFor="radio3">Copywriting</label>
              </div>
            </div>

            <Link to={AppRoutes.HOME}>
              <button
                className="form-new__create _hover01"
                id="btnCreate"
                onClick={(event) => {
                  event.preventDefault();
                  addCard(newCardData);
                }}
              >
                Создать задачу
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
