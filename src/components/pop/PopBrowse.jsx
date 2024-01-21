import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/AppRoutes";

import React from 'react';
import { useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';


export default function PopBrowse() {
  
  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">Название задачи</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly=""
                    placeholder="Введите описание задачи..."
                    defaultValue={""}
                  />
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <div className="calendar__block">
                  <div className="calendar__nav">
                    <DayPicker></DayPicker>
                    <div className="nav__actions">
                    
                  
                  <input
                    type="hidden"
                    id="datepick_value"
                    defaultValue="08.09.2023"
                  />
                  <div className="calendar__period">
                    <p className="calendar__p date-end">
                      Срок исполнения:
                      <span className="date-control">09.09.23</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                <Link to={AppRoutes.HOME}>Редактировать задачу</Link>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                <Link to={AppRoutes.HOME}>Удалить задачу</Link>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
              <Link to={AppRoutes.HOME}>Закрыть</Link>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                <Link to={AppRoutes.HOME}>Сохранить</Link>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                <Link to={AppRoutes.HOME}>Отменить</Link>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <Link to={AppRoutes.HOME}>Удалить задачу</Link>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
              <Link to={AppRoutes.HOME}>Закрыть</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
