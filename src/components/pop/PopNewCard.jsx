import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../lib/AppRoutes";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { addNewCard } from "../../lib/API";
import useUser from "../../hooks/useUser";


export default function PopNewCard() {
  const navigate = useNavigate();
  
  const { user } = useUser();
  const [newCardData, setNewCardData] = useState({
    token: user.token,
    title: "",
    topic: "",
    status: "",
    description: "",
    date: "",
  });

  async function addCard(newCardData) {
         
      await addNewCard(newCardData)
      navigate(AppRoutes.HOME);
    
  }

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
                    <DayPicker></DayPicker>
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
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
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
