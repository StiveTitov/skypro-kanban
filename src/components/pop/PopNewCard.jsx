import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/AppRoutes";
import Calendar from "../DayPicker/DayPicker";
import { useState } from "react";
import { addNewCard } from "../../lib/API";
import useTasks from "../../hooks/useTask";

export default function PopNewCard() {
  const { setCardsData } = useTasks();

  const [selected, setSelected] = useState(new Date());

  const [newCardData, setNewCardData] = useState({
    topic: "",
    title: "",
    description: "",
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
  async function addCard() {
    const cardData = {
      ...newCardData,
      date: selected,
    };
    console.log(cardData);
    if (
      cardData.title === "" ||
      cardData.topic === "" ||
      cardData.description === ""
    ) {
      alert("Вы не заполнили все поля и не выбрали категорию");
      return;
    } else {
      // Обработать ошибку 400!!! Вывести алерт Заполните все поля
      await addNewCard(cardData).then((data) => {
        setCardsData(data.tasks);
      });
    }
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
                        <span className="date-control"></span>
                      </p>
                    </Calendar>
                  </div>

                  <input type="hidden" id="datepick_value" />
                  <div className="calendar__period">
                    {/* <p className="calendar__p date-end">
                      Выберите срок исполнения <span className="date-control" />
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                
                <div class="prod_checbox">
                  <div class="radio-toolbar">
                    <input
                      type="radio"
                      id="radio1"
                      className="radios"
                      value="Web Design"
                      checked={newCardData.topic == 'Web Design' ? true : false}
                      onChange={onTopicNewCard}
                      
                    />
                    <label htmlFor="radio1">Web Design</label>

                    <input
                      type="radio"
                      id="radio2"
                      className="radios"
                      value="Research"
                      checked={newCardData.topic == 'Research' ? true : false}
                      onChange={onTopicNewCard}
                    />
                    <label htmlFor="radio2">Research</label>

                    <input
                      type="radio"
                      id="radio3"
                      className="radios"
                      value="Copywriting"
                      checked={newCardData.topic == 'Copywriting' ? true : false}
                      onChange={onTopicNewCard}
                    />
                    <label htmlFor="radio3">Copywriting</label>
                  </div>
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
