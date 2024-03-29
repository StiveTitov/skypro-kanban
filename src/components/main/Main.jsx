import { Container } from "../common/Common.styled";
import { MainStyled, MainBlock, MainContent } from "./Main.styled";
import { statusList } from "../../data"; //получаем название колонок из файла
import Column from "../column/Column";
import useTasks from "../../hooks/useTask";

export default function Main() {
  const { cards } = useTasks();
  return (
    <MainStyled>
      <Container>
        <MainBlock>
          <MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cards.filter((card) => card.status === status)} //фильтруем данные, чтобы карточка
              /> //соответствовала своей колонке
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </MainStyled>
  );
}
