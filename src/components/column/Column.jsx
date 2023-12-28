import CardsItem from "../cards/CardsItem";
import {MainColumn,ColumnTitle,ColumnTitleP,Cards} from "./Column.styled";

export default function Column({ title, cardList }) {
  

  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnTitleP>{title}</ColumnTitleP>
      </ColumnTitle>
      <Cards>
        {cardList.map((cardList) => (
          <CardsItem
            key={cardList.id}
            theme={cardList.theme}
            color={cardList.color}
            title={cardList.title}
            date={cardList.date}
          />
        ))}
      </Cards>
    </MainColumn>
  );
}
