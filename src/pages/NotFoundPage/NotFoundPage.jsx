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
  
} from "./NoFoundPage.styled";

export default function NotFoundPage() {
  return (
    <PopExitDiv>
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtlH2>Упс, страницы не существует</PopExitTtlH2>
          <PopExitForm>
            <PopExitFormGroup>
              <PopExitExitButtonYes>
                <Link to={AppRoutes.HOME}><PopExitExitButtonYesA>Ок</PopExitExitButtonYesA></Link>
              </PopExitExitButtonYes>
              
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitDiv>
  );
}