import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/AppRoutes";

import "../../../css/signin.css";
import { useState } from "react";
import { loginAPI } from "../../lib/API";
import useUser from "../../hooks/useUser";

export default function SignIn() {
  const {login}= useUser();
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  async function setAuth(loginData) {
       await loginAPI(loginData).then((data) => {
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
  function onPasswordChange(event) {
    //Следит за состоянием поля ввода пароля
    setLoginData({
      ...loginData,
      password: event.target.value,
    });
  }
  return (
    <div className="wrapper">
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <form className="modal__form-login" id="formLogIn" action="#">
              <input
                className="modal__input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Логин"
                value={loginData.login}
                onChange={onLoginChange}
              />
              <input
                className="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={loginData.password}
                onChange={onPasswordChange}
              />
              <button
                className="modal__btn-enter _hover01"
                id="btnEnter"
                onClick={(event) => {
                  event.preventDefault();
                  setAuth(loginData);
                }}
              >
                Войти
              </button>
              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <Link to={AppRoutes.SIGNUP}>Регистрируйтесь здесь</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
