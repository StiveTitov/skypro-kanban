import styled from "styled-components";

// Определение размеров для разных вариантов
  
  export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export default Button; // Теперь, когда наш стилизованный компонент
// создан, его можно экспортировать и использовать в других частях приложения.
//Для этого мы добавляем строку экспорта в конце файла Button.styled.js
//Экспорт позволит использовать Button в других компонентах React.

export const DangerButton = styled(Button)`
  background-color: red;
  &:hover {
    background-color: darkred;
  }
`;
// В этом примере 
//DangerButton наследует все стили Button,
// но переопределяет цвет фона на красный и изменяет цвет при наведении на темно-красный.
