import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/AppRoutes";


import {
  PopExitDiv,
  PopExitContainer,
  PopExitBlock,
  PopExitTtlH2,
  PopExitForm,
  PopExitFormGroup,
  PopExitExitButtonYes,
  PopExitExitButtonYesA,
  PopExitExitButtonNo,
  PopExitExitButtonNoA,
} from "./PopExit.styled";

export default function ExitPage({exit}) {
  return (
    <PopExitDiv>
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtlH2>Выйти из аккаунта?</PopExitTtlH2>
          <PopExitForm>
            <PopExitFormGroup>
              <PopExitExitButtonYes>
                <PopExitExitButtonYesA onClick={(event)=> {
                event.preventDefault();
                exit()
                } }>Да, выйти</PopExitExitButtonYesA>
              </PopExitExitButtonYes>
              <PopExitExitButtonNo>
                <PopExitExitButtonNoA><Link to={AppRoutes.HOME}>Нет, остаться</Link></PopExitExitButtonNoA>
              </PopExitExitButtonNo>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitDiv>
  );
}
