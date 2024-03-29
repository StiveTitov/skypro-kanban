import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/AppRoutes";

import "../../../css/signup.css"

import {useState} from "react";
import useUser from "../../hooks/useUser";
import { regisreation } from "../../lib/API";

export default function SingUp() {
  const {login}= useUser();
    const [loginData, setLoginData] = useState({
      login: "",
      name: "",
      password: "",
    });

    async function setAuth(loginData) {
      await regisreation(loginData).then((data) => {
       login(data.user)
       
     });
    }

    function onLoginChange(event) {
      //Следит за состоянием поля ввода логина
      setLoginData({
        ...loginData,
        login: event.target.value,
      });
    }
    function onNameChange(event) {
      //Следит за состоянием поля ввода логина
      setLoginData({
        ...loginData,
        name: event.target.value,
      });
    }
    function onPasswordChange(event) {
      //Следит за состоянием поля ввода пароля
      setLoginData({
        ...loginData,
        password: event.target.value,
      });
    }
  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" id="formLogUp" action="#">
              <input
                className="modal__input first-name"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
                value={loginData.name}
                onChange={onNameChange}
              />
              <input
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Логин"
                value={loginData.login}
                onChange={onLoginChange}
              />
              <input
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={loginData.password}
                onChange={onPasswordChange}
              />
              <button
                className="modal__btn-signup-ent _hover01"
                id="SignUpEnter"
                onClick={(event) => {
                  event.preventDefault();
                  setAuth(loginData);
                }}
              >
                Зарегистрироваться
              </button>
              <div className="modal__form-group">
                <p>
                  Уже есть аккаунт? <Link to={AppRoutes.SIGNIN}>Войдите здесь</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
