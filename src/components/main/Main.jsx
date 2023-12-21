import { MainStyled, Container, MainBlock, MainContent } from "../common/Main.styled";
import { statusList } from "../../data"; //получаем название колонок из файла
import Column from "../column/Column";

export default function Main({ cards }) {
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
