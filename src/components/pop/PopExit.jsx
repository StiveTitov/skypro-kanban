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

export default function PopExit() {
  return (
    <PopExitDiv>
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtlH2>Выйти из аккаунта?</PopExitTtlH2>
          <PopExitForm>
            <PopExitFormGroup>
              <PopExitExitButtonYes>
                <PopExitExitButtonYesA>Да, выйти</PopExitExitButtonYesA>{" "}
              </PopExitExitButtonYes>
              <PopExitExitButtonNo>
                <PopExitExitButtonNoA>Нет, остаться</PopExitExitButtonNoA>{" "}
              </PopExitExitButtonNo>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitDiv>
  );
}
