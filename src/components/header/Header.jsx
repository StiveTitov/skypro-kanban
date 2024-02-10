import { useState } from "react";

import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/AppRoutes";

import { Container } from "../../components/common/Common.styled";

import { userName } from "../../lib/API";

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
  Img,
} from "./Header.styled";

export default function Header() {
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
              <Img src="/images/logo.png" alt="logo" />
            </HeaderA>
          </HeaderLogoShowLight>
          <HeaderLogoDark>
            <HeaderA>
              <img src="/images/logo_dark.png" alt="logo" />
            </HeaderA>
          </HeaderLogoDark>
          <HeaderNav>
            <HeaderBtnMainNew>
              <Link to={AppRoutes.ADD_CARD}>
                <HeaderBtnMainNewA>Создать новую задачу</HeaderBtnMainNewA>
              </Link>
            </HeaderBtnMainNew>
            <HeaderUser onClick={toggleDropdown}>{userName}</HeaderUser>
            {isOpen && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                <p className="pop-user-set__name">{userName}</p>

                <button type="button" className="_hover03">
                  <Link to={AppRoutes.EXIT}>Выйти</Link>
                </button>
              </div>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
}
