import { useState } from "react";
import { Container } from "../../components/common/Common.styled";
import {
  StyledHeader,
  HeaderA,
  HeaderBlock,
  HeaderLogoShowLight,
  HeaderLogoDark,
  HeaderNav,
  HeaderBtnMainNew,
  HeaderBtnMainNewA,
  HeaderUser,
} from "./Header.styled";

export default function Header({ addCard }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
    console.log("Click!");
  };
  return (
    <StyledHeader>
      <Container>
        <HeaderBlock>
          <HeaderLogoShowLight>
            <HeaderA>
              <img src="/images/logo.png" alt="logo" />
            </HeaderA>
          </HeaderLogoShowLight>
          <HeaderLogoDark>
            <HeaderA>
              <img src="/images/logo_dark.png" alt="logo" />
            </HeaderA>
          </HeaderLogoDark>
          <HeaderNav>
            <HeaderBtnMainNew>
              <HeaderBtnMainNewA onClick={addCard}>
                Создать новую задачу
              </HeaderBtnMainNewA>
            </HeaderBtnMainNew>
            <HeaderUser onClick={toggleDropdown}>Ivan Ivanov</HeaderUser>
            {isOpen && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
}
